export type TechnologyPillar = {
  code: string;
  title: string;
  headline: string;
  body: string;
  capabilities: string[];
  image?: { src: string; width: number; height: number; alt: string };
};

export const technologyPillars: TechnologyPillar[] = [
  {
    code: "SYS-01",
    title: "Humanoid Robotics",
    headline: "A machine built for the world humans built.",
    body: "Doors, stairs, shelves, tools — the physical world is shaped around the human form. We engineer full-body bipedal platforms with proprietary high-torque actuators and human-equivalent reach, so deployment never requires rebuilding the environment.",
    capabilities: ["Proprietary rotary actuators", "32+ degrees of freedom", "Human-scale kinematics"],
    image: { src: "/images/hero-robot-960.avif", width: 960, height: 540, alt: "AnthRo R3 humanoid robot" },
  },
  {
    code: "SYS-02",
    title: "AI Systems",
    headline: "Behavior learned, not scripted.",
    body: "Our behavior models are trained on large-scale demonstration and simulation data, then distilled to run onboard. The same foundation drives manipulation, locomotion, and task reasoning — one model family across the platform.",
    capabilities: ["Foundation models for control", "Onboard inference", "Continuous fleet learning"],
  },
  {
    code: "SYS-03",
    title: "Autonomy",
    headline: "Hours of useful work without a tether.",
    body: "Perception, mapping, task planning, and recovery behaviors run as one autonomy stack. The robot localizes in dynamic spaces, sequences long-horizon tasks, and asks for help only when it should.",
    capabilities: ["Dynamic-environment SLAM", "Long-horizon task planning", "Graceful failure recovery"],
  },
  {
    code: "SYS-04",
    title: "Robotics Software",
    headline: "A kilohertz heartbeat.",
    body: "Whole-body control runs at 1kHz on a hard real-time core, with perception-to-action latency under ten milliseconds. Every layer — drivers, middleware, control, tooling — is written in-house.",
    capabilities: ["1kHz whole-body control", "<10ms perception latency", "100% in-house stack"],
  },
  {
    code: "SYS-05",
    title: "Physical Intelligence",
    headline: "Intelligence you can hand a tool to.",
    body: "Manipulation in the real world demands force, compliance, and touch. Our hands and arms combine joint-torque sensing with learned contact-rich policies — the difference between gripping and handling.",
    capabilities: ["Contact-rich manipulation", "Force-compliant control", "Learned tactile policies"],
    image: { src: "/images/robot-hand-960.avif", width: 960, height: 1707, alt: "Robotic hand with articulated fingers" },
  },
  {
    code: "SYS-06",
    title: "Simulation & Digital Twins",
    headline: "A million hours before the first step.",
    body: "Every behavior trains in physics-accurate simulation against a digital twin of the hardware, then transfers to the real robot. Sim-to-real is not a research problem here — it is the production pipeline.",
    capabilities: ["Physics-accurate twin", "Massively parallel training", "Zero-shot sim-to-real transfer"],
    image: { src: "/images/tech-schematic-cutaway-960.avif", width: 960, height: 960, alt: "R3 cutaway schematic" },
  },
];
