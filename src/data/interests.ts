import type { Interest } from '@/types/data';

export const interests: Interest[] = [
  {
    icon: '🌐',
    label: 'Networking & Infrastructure',
    desc: 'Building and breaking networks. MikroTik RouterOS, VLANs, firewall rules.',
  },
  {
    icon: '🏗️',
    label: 'Infrastructure as Code',
    desc: 'Terraform, Ansible — automating infra with version-controlled config.',
  },
  {
    icon: '🐳',
    label: 'Containerisation',
    desc: 'Docker, Docker Compose, planning to move into Kubernetes.',
  },
  {
    icon: '☁️',
    label: 'Cloud',
    desc: 'AWS — currently studying for Cloud Practitioner and SAA.',
  },
  {
    icon: '🖥️',
    label: 'Linux Systems',
    desc: 'Daily driving Linux. Bash scripting, systemd, cron automation.',
  },
  {
    icon: '🔒',
    label: 'Security Research',
    desc: 'Flipper Zero, ESP32, RF signals, network penetration basics.',
  },
  {
    icon: '⚡',
    label: 'Home Lab Tinkering',
    desc: 'Raspberry Pi clusters, QNAP NAS, self-hosted services.',
  },
];
