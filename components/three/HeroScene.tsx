"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sampleHumanoid, sampleLinks } from "./humanoid";
import { ParticleHumanoid } from "./ParticleHumanoid";
import { NeuralLinks } from "./NeuralLinks";
import { HoloGrid } from "./HoloGrid";

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    // damped pointer parallax, max ~±2°
    const targetY = state.pointer.x * 0.05;
    const targetX = -state.pointer.y * 0.03;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 3, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 3, delta);
  });
  return <group ref={group}>{children}</group>;
}

function BackdropGlow() {
  const texture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(70, 160, 200, 0.55)");
    g.addColorStop(0.4, "rgba(40, 90, 140, 0.2)");
    g.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }, []);

  return (
    <sprite position={[0, 0.1, -1.6]} scale={[5.5, 5.5, 1]}>
      <spriteMaterial
        map={texture}
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  );
}

function SceneContent() {
  const isMobile = useThree((s) => s.size.width < 768);
  const isWide = useThree((s) => s.size.width >= 1024);
  const { cloud, segments } = useMemo(() => {
    const cloud = sampleHumanoid(isMobile ? 8000 : 15000);
    return { cloud, segments: sampleLinks(cloud, 80) };
  }, [isMobile]);

  return (
    <Rig>
      {/* on wide screens the copy sits left — stand the figure to the right */}
      <group position={[isWide ? 0.85 : 0, 0, 0]}>
        <BackdropGlow />
        {/* figure coords: feet at y=0 — drop so it stands centered in frame */}
        <group position={[0, -0.92, 0]}>
          <ParticleHumanoid cloud={cloud} />
          <NeuralLinks segments={segments} />
          <HoloGrid />
        </group>
      </group>
    </Rig>
  );
}

export default function HeroScene({
  paused,
  onReady,
}: {
  paused: boolean;
  onReady?: () => void;
}) {
  return (
    <Canvas
      frameloop={paused ? "never" : "always"}
      dpr={[1, 1.75]}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      camera={{ fov: 35, position: [0, 0.18, 4.3] }}
      onCreated={() => onReady?.()}
    >
      <SceneContent />
    </Canvas>
  );
}
