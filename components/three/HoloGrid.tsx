"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uAppear;
  varying vec2 vUv;

  void main() {
    vec2 p = (vUv - 0.5) * 14.0;
    vec2 grid = abs(fract(p) - 0.5) / fwidth(p);
    float line = 1.0 - min(min(grid.x, grid.y), 1.0);
    float dist = length(p);
    float fade = smoothstep(6.5, 1.2, dist);
    float pulse = 0.85 + 0.15 * sin(uTime * 0.8 - dist * 0.9);
    float alpha = line * fade * pulse * 0.4 * uAppear;
    gl_FragColor = vec4(vec3(0.42, 0.87, 0.95), alpha);
  }
`;

export function HoloGrid() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uAppear: { value: 0 },
        },
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );

  useFrame((state, delta) => {
    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uAppear.value = Math.min(
      material.uniforms.uAppear.value + delta / 1.2,
      1,
    );
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} material={material}>
      <planeGeometry args={[14, 14]} />
    </mesh>
  );
}
