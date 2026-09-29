export type System = { name: string; icon: string; desc: string; status: "Operational" | "Monitoring" | "Maintenance" };

export const systems: System[] = [
  { name: "Six-Eyes Analytics", icon: "eye", desc: "Anomaly visibility and telemetry across every connected node.", status: "Operational" },
  { name: "Domain Security Core", icon: "lock", desc: "Network segmentation and access isolation for sensitive zones.", status: "Operational" },
  { name: "Cursed Energy Monitor", icon: "atom", desc: "Continuous security event monitoring with tiered alerting.", status: "Monitoring" },
  { name: "Barrier Network", icon: "shield", desc: "Infrastructure protection and perimeter hardening.", status: "Operational" },
  { name: "Sorcerer Access Control", icon: "globe", desc: "Identity and privilege management with audited sessions.", status: "Maintenance" },
  { name: "Black Flash Response", icon: "sun", desc: "Incident-response workflow and rapid containment.", status: "Operational" },
];

export const stats = [
  { value: "99.97%", label: "System availability" },
  { value: "24/7", label: "Threat monitoring" },
  { value: "180+", label: "Protected nodes" },
  { value: "12", label: "Defense domains" },
];

export type Pillar = { icon: string; title: string; status: string; tone: "ok" | "watch" | "alert"; text: string };
export const pillars: Pillar[] = [
  { icon: "eye", title: "Threat Monitoring", status: "OPERATIONAL", tone: "ok", text: "Signals reviewed around the clock by the response team." },
  { icon: "lock", title: "Identity Protection", status: "PROTECTED", tone: "watch", text: "Scoped roles, strong operator identity, audited access." },
  { icon: "shield", title: "Infrastructure Hardening", status: "HARDENING REQUIRED", tone: "alert", text: "Baselines and drift checks with open remediation items." },
  { icon: "globe", title: "Data Protection", status: "OPERATIONAL", tone: "ok", text: "Encryption in transit and at rest with retention controls." },
  { icon: "sun", title: "Incident Response", status: "OPERATIONAL", tone: "ok", text: "Playbooks with clear owners and escalation paths." },
  { icon: "atom", title: "Network Segmentation", status: "OPERATIONAL", tone: "ok", text: "Isolated zones limit how far any threat can travel." },
];
