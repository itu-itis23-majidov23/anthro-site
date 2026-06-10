export type ResearchArea = {
  code: string;
  title: string;
  body: string;
};

export const researchAreas: ResearchArea[] = [
  {
    code: "RL-01",
    title: "Reinforcement Learning for Whole-Body Control",
    body: "Locomotion and balance policies trained in massively parallel simulation, robust to terrain, payload shifts, and external pushes. Policies run onboard at control rate.",
  },
  {
    code: "VLA-02",
    title: "Vision-Language-Action Models",
    body: "Models that map natural-language instruction and camera observation directly to motor commands. One instruction, one demonstration, one deployment.",
  },
  {
    code: "RL-03",
    title: "Robot Learning & Imitation",
    body: "Learning manipulation from human demonstration at scale — teleoperation, video, and kinesthetic teaching feed a single growing skill library.",
  },
  {
    code: "NAV-04",
    title: "Navigation in Unstructured Environments",
    body: "Mapping and locomotion planning for spaces that change by the hour: warehouses mid-shift, factory floors, public buildings. No beacons, no rails.",
  },
  {
    code: "HRI-05",
    title: "Human-Robot Interaction",
    body: "Robots that work near people must be legible. We study intent signaling, safe motion around humans, and interfaces operators actually trust.",
  },
  {
    code: "MAS-06",
    title: "Multi-Agent Coordination",
    body: "Fleets that share maps, skills, and task queues. What one robot learns in the field, every robot knows by morning.",
  },
];
