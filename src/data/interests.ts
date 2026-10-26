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
    desc: 'Learning Terraform — infrastructure as version-controlled config.',
  },
  {
    icon: '🐳',
    label: 'Containerisation',
    desc: 'Docker and Docker Compose — in the home lab and in production.',
  },
  {
    icon: '☁️',
    label: 'Cloud',
    desc: 'Learning AWS fundamentals. Running my own production VPS behind Cloudflare today.',
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
    desc: 'Raspberry Pi 5, QNAP NAS, a home rack and patch panel, self-hosted services.',
  },
];
