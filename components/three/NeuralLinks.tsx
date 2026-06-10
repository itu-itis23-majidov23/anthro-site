"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PULSE_COUNT = 7;

type Pulse = { seg: number; t: number; speed: number };

/**
 * Faint line segments arcing through the particle figure, with bright
 * pulses traveling along random segments — the "thought" layer.
 */
export function NeuralLinks({ segments }: { segments: Float32Array }) {
  const segmentCount = segments.length / 6;

  const lineGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(segments, 3));
    return g;
  }, [segments]);

  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color(0.42, 0.87, 0.95),
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  const pulses = useRef<Pulse[]>(
    Array.from({ length: PULSE_COUNT }, () => ({
      seg: Math.floor(Math.random() * segmentCount),
      t: Math.random(),
      speed: 0.5 + Math.random() * 0.8,
    })),
  );

  const pulseGeometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(PULSE_COUNT * 3), 3),
    );
    return g;
  }, []);

  const pulseMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: new THREE.Color(0.8, 0.97, 1.0),
        size: 0.035,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  useFrame((state, delta) => {
    // fade the whole layer in after the figure has mostly materialized
    const appear = THREE.MathUtils.clamp((state.clock.elapsedTime - 2.2) / 1.5, 0, 1);
    lineMaterial.opacity = appear * 0.1;
    pulseMaterial.opacity = appear * 0.9;

    const attr = pulseGeometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < PULSE_COUNT; i++) {
      const p = pulses.current[i];
      p.t += delta * p.speed;
      if (p.t > 1) {
        p.t = 0;
        p.seg = Math.floor(Math.random() * segmentCount);
        p.speed = 0.5 + Math.random() * 0.8;
      }
      const o = p.seg * 6;
      attr.setXYZ(
        i,
        segments[o] + (segments[o + 3] - segments[o]) * p.t,
        segments[o + 1] + (segments[o + 4] - segments[o + 1]) * p.t,
        segments[o + 2] + (segments[o + 5] - segments[o + 2]) * p.t,
      );
    }
    attr.needsUpdate = true;
  });

  return (
    <group>
      <lineSegments geometry={lineGeometry} material={lineMaterial} frustumCulled={false} />
      <points geometry={pulseGeometry} material={pulseMaterial} frustumCulled={false} />
    </group>
  );
}
