export type Discipline = {
  code: string;
  title: string;
  blurb: string;
};

export const values = [
  {
    title: "Small teams",
    body: "Every system has a name attached to it. Ownership is total, and so is the credit.",
  },
  {
    title: "Hard problems",
    body: "Bipedal locomotion, contact-rich manipulation, real-time learned control. Nothing here is a solved problem.",
  },
  {
    title: "Hardware truth",
    body: "Simulation is the pipeline; the robot is the judge. Work ships to a machine that either stands or falls.",
  },
  {
    title: "Long horizon",
    body: "We are building for decades, not demo days. Engineering decisions are made accordingly.",
  },
];

export const disciplines: Discipline[] = [
  {
    code: "CTL",
    title: "Controls Engineering",
    blurb: "Whole-body control, state estimation, hard real-time systems.",
  },
  {
    code: "MEC",
    title: "Actuation & Mechatronics",
    blurb: "Actuator design, transmission systems, structural engineering.",
  },
  {
    code: "MLR",
    title: "ML & Robot Learning",
    blurb: "RL at scale, imitation learning, vision-language-action models.",
  },
  {
    code: "PER",
    title: "Perception",
    blurb: "Sensor fusion, SLAM, real-time scene understanding.",
  },
  {
    code: "EMB",
    title: "Embedded Systems",
    blurb: "Firmware, motor drivers, onboard compute architecture.",
  },
  {
    code: "SIM",
    title: "Simulation",
    blurb: "Physics engines, digital twins, massively parallel training infra.",
  },
];
