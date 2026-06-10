import * as THREE from "three";

/**
 * Procedural point-cloud humanoid ROBOT: points sampled on a parametric
 * skeleton of faceted capsule housings, joint spheres, and articulation
 * rings. Reads as a machine, not a body: segmented limbs with gaps at the
 * joints, ridge lines along housings, a helmet with a visor band.
 * Figure coordinates: feet at y=0, crown at y≈1.73. No model assets.
 */

type Capsule = {
  a: [number, number, number];
  b: [number, number, number];
  ra: number;
  rb: number;
  /** snap particles to N vertical ridge lines — mechanical housing look */
  facets?: number;
};

type Ring = {
  c: [number, number, number];
  axis: [number, number, number];
  r: number;
};

const V = (x: number, y: number, z: number): [number, number, number] => [x, y, z];

function arm(side: 1 | -1, bend: number): Capsule[] {
  const s = side;
  return [
    // shoulder joint sphere
    { a: V(s * 0.225, 1.4, 0), b: V(s * 0.23, 1.41, 0), ra: 0.062, rb: 0.062 },
    // upper-arm housing — ends short of the elbow (articulation gap)
    { a: V(s * 0.25, 1.36, 0), b: V(s * 0.27, 1.14, 0.015 + bend), ra: 0.048, rb: 0.042, facets: 8 },
    // forearm housing
    { a: V(s * 0.28, 1.06, 0.03 + bend), b: V(s * 0.3, 0.86, 0.06 + bend * 2), ra: 0.04, rb: 0.034, facets: 8 },
    // end-effector
    { a: V(s * 0.305, 0.8, 0.075 + bend * 2), b: V(s * 0.31, 0.73, 0.09 + bend * 2), ra: 0.034, rb: 0.02, facets: 6 },
  ];
}

function armRings(side: 1 | -1, bend: number): Ring[] {
  const s = side;
  return [
    { c: V(s * 0.275, 1.1, 0.022 + bend), axis: V(s * 0.05, -1, 0.07), r: 0.05 }, // elbow
    { c: V(s * 0.302, 0.83, 0.068 + bend * 2), axis: V(s * 0.03, -1, 0.1), r: 0.04 }, // wrist
  ];
}

function leg(side: 1 | -1): Capsule[] {
  const s = side;
  return [
    // hip joint sphere
    { a: V(s * 0.1, 0.96, 0), b: V(s * 0.1, 0.965, 0), ra: 0.06, rb: 0.06 },
    // thigh housing
    { a: V(s * 0.105, 0.9, 0), b: V(s * 0.11, 0.58, 0.005), ra: 0.066, rb: 0.054, facets: 8 },
    // shin housing
    { a: V(s * 0.115, 0.5, 0.005), b: V(s * 0.12, 0.14, -0.005), ra: 0.05, rb: 0.038, facets: 8 },
    // boot
    { a: V(s * 0.12, 0.045, 0.02), b: V(s * 0.12, 0.05, 0.18), ra: 0.042, rb: 0.028, facets: 6 },
  ];
}

function legRings(side: 1 | -1): Ring[] {
  const s = side;
  return [
    { c: V(s * 0.112, 0.54, 0.008), axis: V(0, 1, 0.02), r: 0.056 }, // knee
    { c: V(s * 0.118, 0.11, 0), axis: V(0, 1, -0.03), r: 0.042 }, // ankle
  ];
}

const SKELETON: Capsule[] = [
  // helmet — spherical shell; the proud visor band carries the robotic cue
  { a: V(0, 1.6, 0.005), b: V(0, 1.605, 0.005), ra: 0.105, rb: 0.105 },
  // neck connector (thin, exposed)
  { a: V(0, 1.46, 0), b: V(0, 1.52, 0), ra: 0.04, rb: 0.04 },
  // chest unit — broad, tapering hard to the waist
  { a: V(0, 1.42, 0), b: V(0, 1.14, 0), ra: 0.168, rb: 0.122, facets: 8 },
  // waist connector — narrow exposed core between chest and pelvis
  { a: V(0, 1.12, 0), b: V(0, 1.05, 0), ra: 0.058, rb: 0.058 },
  // pelvis block
  { a: V(0, 1.02, 0), b: V(0, 0.94, 0), ra: 0.128, rb: 0.112, facets: 8 },
  // arms with slight asymmetry so the pose reads alive, not mirrored
  ...arm(-1, 0.0),
  ...arm(1, 0.02),
  ...leg(-1),
  ...leg(1),
];

const RINGS: Ring[] = [
  { c: V(0, 1.61, 0.014), axis: V(0, 1, 0.06), r: 0.112 }, // visor band, proud of the shell
  { c: V(0, 1.49, 0), axis: V(0, 1, 0), r: 0.048 }, // neck ring
  { c: V(0, 1.085, 0), axis: V(0, 1, 0), r: 0.085 }, // waist ring
  ...armRings(-1, 0.0),
  ...armRings(1, 0.02),
  ...legRings(-1),
  ...legRings(1),
];

/** fraction of all points spent on articulation rings (dense → bright) */
const RING_FRACTION = 0.16;

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

function orthoFrame(axis: THREE.Vector3, tangent: THREE.Vector3, bitangent: THREE.Vector3) {
  tangent.set(axis.y, axis.z, axis.x).cross(axis).normalize();
  bitangent.crossVectors(axis, tangent);
}

export function sampleHumanoid(count: number, seed = 1337): HumanoidCloud {
  const rand = mulberry32(seed);
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  const heights = new Float32Array(count);

  const ringCount = Math.floor(count * RING_FRACTION);
  const bodyCount = count - ringCount;

  const areas = SKELETON.map(capsuleArea);
  const totalArea = areas.reduce((s, a) => s + a, 0);

  const axis = new THREE.Vector3();
  const tangent = new THREE.Vector3();
  const bitangent = new THREE.Vector3();
  const point = new THREE.Vector3();
  const va = new THREE.Vector3();
  const vb = new THREE.Vector3();

  let i = 0;

  const writePoint = () => {
    positions[i * 3] = point.x;
    positions[i * 3 + 1] = point.y;
    positions[i * 3 + 2] = point.z;
    seeds[i] = rand();
    heights[i] = point.y / FIGURE_HEIGHT;
    i++;
  };

  // --- capsule housings & joint spheres ---
  for (let c = 0; c < SKELETON.length; c++) {
    const cap = SKELETON[c];
    const n =
      c === SKELETON.length - 1
        ? bodyCount - i
        : Math.round((areas[c] / totalArea) * bodyCount);

    va.set(...cap.a);
    vb.set(...cap.b);
    axis.subVectors(vb, va);
    const len = axis.length();
    if (len > 1e-6) axis.divideScalar(len);
    else axis.set(0, 1, 0);

    // degenerate capsule (a ≈ b) — joint sphere
    if (len < 0.02) {
      for (let k = 0; k < n && i < bodyCount; k++) {
        const u = rand() * 2 - 1;
        const theta = rand() * Math.PI * 2;
        const s = Math.sqrt(1 - u * u);
        const r = cap.ra * (0.94 + rand() * 0.12);
        point
          .copy(va)
          .add(new THREE.Vector3(s * Math.cos(theta) * r, u * r, s * Math.sin(theta) * r));
        writePoint();
      }
      continue;
    }

    orthoFrame(axis, tangent, bitangent);

    for (let k = 0; k < n && i < bodyCount; k++) {
      const t = rand() * 1.12 - 0.06;
      const tc = Math.min(Math.max(t, 0), 1);
      const r = (cap.ra + (cap.rb - cap.ra) * tc) * (0.95 + rand() * 0.1);
      const overshoot = Math.abs(t - tc) * len;
      const rr = Math.sqrt(Math.max(r * r - overshoot * overshoot * 4, r * r * 0.05));

      // faceted housings: most points snap to ridge lines along the limb
      let theta: number;
      if (cap.facets && rand() < 0.72) {
        theta =
          ((Math.floor(rand() * cap.facets) + 0.5) / cap.facets + (rand() - 0.5) * 0.025) *
          Math.PI *
          2;
      } else {
        theta = rand() * Math.PI * 2;
      }

      point
        .copy(va)
        .addScaledVector(axis, t * len)
        .addScaledVector(tangent, Math.cos(theta) * rr)
        .addScaledVector(bitangent, Math.sin(theta) * rr);
      writePoint();
    }
  }

  // --- articulation rings (dense circles — read as servo joints) ---
  const ringWeights = RINGS.map((r) => r.r);
  const ringTotal = ringWeights.reduce((s, w) => s + w, 0);
  for (let g = 0; g < RINGS.length; g++) {
    const ring = RINGS[g];
    const n =
      g === RINGS.length - 1
        ? count - i
        : Math.round((ringWeights[g] / ringTotal) * ringCount);

    axis.set(...ring.axis).normalize();
    orthoFrame(axis, tangent, bitangent);
    va.set(...ring.c);

    for (let k = 0; k < n && i < count; k++) {
      const theta = rand() * Math.PI * 2;
      const r = ring.r * (0.97 + rand() * 0.06);
      point
        .copy(va)
        .addScaledVector(tangent, Math.cos(theta) * r)
        .addScaledVector(bitangent, Math.sin(theta) * r)
        .addScaledVector(axis, (rand() - 0.5) * 0.012);
      writePoint();
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
    if (d < 0.1 || d > 0.38) continue;
    segments.set([a.x, a.y, a.z, b.x, b.y, b.z], written * 6);
    written++;
  }
  return segments.slice(0, written * 6);
}

export { FIGURE_HEIGHT };
