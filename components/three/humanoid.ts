import * as THREE from "three";

/**
 * Procedural point-cloud humanoid: points sampled on the surfaces of a
 * parametric capsule skeleton in a neutral A-pose. No model assets.
 * Figure coordinates: feet at y=0, crown at y≈1.73.
 */

type Capsule = {
  a: [number, number, number];
  b: [number, number, number];
  ra: number;
  rb: number;
};

const V = (x: number, y: number, z: number): [number, number, number] => [x, y, z];

function limb(side: 1 | -1, bend: number): Capsule[] {
  const s = side;
  return [
    // upper arm — hangs with a slight outward/forward bend
    { a: V(s * 0.24, 1.4, 0), b: V(s * 0.28, 1.12, 0.02 + bend), ra: 0.052, rb: 0.045 },
    // forearm
    { a: V(s * 0.28, 1.12, 0.02 + bend), b: V(s * 0.3, 0.86, 0.07 + bend * 2), ra: 0.042, rb: 0.036 },
    // hand
    { a: V(s * 0.305, 0.82, 0.08 + bend * 2), b: V(s * 0.31, 0.74, 0.1 + bend * 2), ra: 0.04, rb: 0.025 },
  ];
}

function leg(side: 1 | -1): Capsule[] {
  const s = side;
  return [
    // thigh
    { a: V(s * 0.1, 0.95, 0), b: V(s * 0.11, 0.52, 0.01), ra: 0.075, rb: 0.058 },
    // shin
    { a: V(s * 0.11, 0.52, 0.01), b: V(s * 0.12, 0.09, -0.01), ra: 0.052, rb: 0.04 },
    // foot
    { a: V(s * 0.12, 0.045, 0.0), b: V(s * 0.12, 0.045, 0.16), ra: 0.04, rb: 0.03 },
  ];
}

const SKELETON: Capsule[] = [
  // head + neck
  { a: V(0, 1.62, 0), b: V(0, 1.63, 0), ra: 0.115, rb: 0.115 },
  { a: V(0, 1.48, 0), b: V(0, 1.55, 0), ra: 0.052, rb: 0.05 },
  // torso: chest tapering to waist, then pelvis
  { a: V(0, 1.42, 0), b: V(0, 1.08, 0), ra: 0.165, rb: 0.115 },
  { a: V(0, 1.08, 0), b: V(0, 0.96, 0), ra: 0.115, rb: 0.135 },
  // shoulder joints
  { a: V(-0.21, 1.41, 0), b: V(-0.22, 1.42, 0), ra: 0.06, rb: 0.06 },
  { a: V(0.21, 1.41, 0), b: V(0.22, 1.42, 0), ra: 0.06, rb: 0.06 },
  // arms — slight asymmetry so the pose reads alive, not mirrored
  ...limb(-1, 0.0),
  ...limb(1, 0.025),
  ...leg(-1),
  ...leg(1),
];

const FIGURE_HEIGHT = 1.73;

function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function capsuleArea(c: Capsule): number {
  const len = new THREE.Vector3(...c.a).distanceTo(new THREE.Vector3(...c.b));
  const rAvg = (c.ra + c.rb) / 2;
  if (len < 0.02) return 4 * Math.PI * rAvg * rAvg;
  return Math.PI * 2 * rAvg * len + 4 * Math.PI * rAvg * rAvg * 0.5;
}

export type HumanoidCloud = {
  positions: Float32Array;
  seeds: Float32Array;
  heights: Float32Array;
};

export function sampleHumanoid(count: number, seed = 1337): HumanoidCloud {
  const rand = mulberry32(seed);
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  const heights = new Float32Array(count);

  const areas = SKELETON.map(capsuleArea);
  const totalArea = areas.reduce((s, a) => s + a, 0);

  const axis = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const bitangent = new THREE.Vector3();
  const point = new THREE.Vector3();
  const va = new THREE.Vector3();
  const vb = new THREE.Vector3();

  let i = 0;
  for (let c = 0; c < SKELETON.length; c++) {
    const cap = SKELETON[c];
    const n = c === SKELETON.length - 1 ? count - i : Math.round((areas[c] / totalArea) * count);

    va.set(...cap.a);
    vb.set(...cap.b);
    axis.subVectors(vb, va);
    const len = axis.length();
    if (len > 1e-6) axis.divideScalar(len);
    else axis.set(0, 1, 0);

    // degenerate capsule (a ≈ b) — sample a sphere surface instead
    if (len < 0.02) {
      for (let k = 0; k < n && i < count; k++, i++) {
        const u = rand() * 2 - 1;
        const theta = rand() * Math.PI * 2;
        const s = Math.sqrt(1 - u * u);
        const r = cap.ra * (0.92 + rand() * 0.16);
        point
          .copy(va)
          .add(
            new THREE.Vector3(s * Math.cos(theta) * r, u * r, s * Math.sin(theta) * r),
          );
        positions[i * 3] = point.x;
        positions[i * 3 + 1] = point.y;
        positions[i * 3 + 2] = point.z;
        seeds[i] = rand();
        heights[i] = point.y / FIGURE_HEIGHT;
      }
      continue;
    }

    // orthonormal frame around the capsule axis
    tangent.set(axis.y, axis.z, axis.x).cross(axis).normalize();
    bitangent.crossVectors(axis, tangent);

    for (let k = 0; k < n && i < count; k++, i++) {
      // sample slightly beyond the segment ends to round the caps
      const t = rand() * 1.16 - 0.08;
      const tc = Math.min(Math.max(t, 0), 1);
      const r = (cap.ra + (cap.rb - cap.ra) * tc) * (0.92 + rand() * 0.16);
      // cap rounding: shrink radius past the ends
      const overshoot = Math.abs(t - tc) * len;
      const rr = Math.sqrt(Math.max(r * r - overshoot * overshoot * 4, r * r * 0.05));
      const theta = rand() * Math.PI * 2;

      point
        .copy(va)
        .addScaledVector(axis, t * len)
        .addScaledVector(tangent, Math.cos(theta) * rr)
        .addScaledVector(bitangent, Math.sin(theta) * rr);

      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
      seeds[i] = rand();
      heights[i] = point.y / FIGURE_HEIGHT;
    }
  }

  return { positions, seeds, heights };
}

/** Precompute short link segments between nearby cloud points (for NeuralLinks). */
export function sampleLinks(
  cloud: HumanoidCloud,
  linkCount: number,
  seed = 4242,
): Float32Array {
  const rand = mulberry32(seed);
  const n = cloud.positions.length / 3;
  const segments = new Float32Array(linkCount * 6);
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();

  let written = 0;
  let guard = 0;
  while (written < linkCount && guard++ < linkCount * 200) {
    const ia = Math.floor(rand() * n);
    const ib = Math.floor(rand() * n);
    a.fromArray(cloud.positions, ia * 3);
    b.fromArray(cloud.positions, ib * 3);
    const d = a.distanceTo(b);
    if (d < 0.12 || d > 0.55) continue;
    segments.set([a.x, a.y, a.z, b.x, b.y, b.z], written * 6);
    written++;
  }
  return segments.slice(0, written * 6);
}

export { FIGURE_HEIGHT };
