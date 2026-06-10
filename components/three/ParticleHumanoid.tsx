"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { HumanoidCloud } from "./humanoid";

const vertexShader = /* glsl */ `
  attribute float aSeed;
  attribute float aHeight;
  uniform float uTime;
  uniform float uReveal;
  uniform float uPixelRatio;
  varying float vAlpha;
  varying float vHeight;

  void main() {
    vHeight = aHeight;
    vec3 p = position;

    // per-particle shimmer + slow whole-body breathing
    float t = uTime * 1.4 + aSeed * 6.2831;
    p.x += sin(t * 1.7 + aSeed * 90.0) * 0.006;
    p.y += sin(t * 1.3 + aSeed * 70.0) * 0.006 + sin(uTime * 0.9) * 0.01 * aHeight;
    p.z += cos(t * 1.5 + aSeed * 50.0) * 0.006;

    // bottom-up materialization scan
    float edge = smoothstep(uReveal, uReveal - 0.1, aHeight);
    vAlpha = edge * (0.55 + 0.45 * sin(t * 2.0));

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + aSeed * 2.4) * uPixelRatio * (3.4 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  varying float vAlpha;
  varying float vHeight;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float disc = smoothstep(0.5, 0.06, d);
    float a = disc * vAlpha;
    if (a < 0.01) discard;
    vec3 cyan = vec3(0.42, 0.87, 0.95);
    vec3 white = vec3(0.95, 0.99, 1.0);
    vec3 color = mix(cyan, white, vHeight * 0.55 + 0.1);
    gl_FragColor = vec4(color, a);
  }
`;

export function ParticleHumanoid({ cloud }: { cloud: HumanoidCloud }) {
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(cloud.positions, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(cloud.seeds, 1));
    g.setAttribute("aHeight", new THREE.BufferAttribute(cloud.heights, 1));
    return g;
  }, [cloud]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uReveal: { value: 0 },
          uPixelRatio: { value: 1 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  useFrame((state, delta) => {
    material.uniforms.uTime.value = state.clock.elapsedTime;
    // ~2.8s materialization after mount (slightly past 1.0 so the soft edge clears the crown)
    material.uniforms.uReveal.value = Math.min(
      material.uniforms.uReveal.value + delta / 2.4,
      1.15,
    );
    material.uniforms.uPixelRatio.value = state.gl.getPixelRatio();
  });

  return <points geometry={geometry} material={material} frustumCulled={false} />;
}
