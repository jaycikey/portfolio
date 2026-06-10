import type { Profile } from '@/types/data';

const githubHandle = 'jaycikey';
const twitterHandle = 'jaycikey';
const linkedinSlug = 'kostiantyn-kulzhynskyi';
const websiteDomain = 'jayck.dev';
const emailAddr = 'cj@jayck.dev';

export const profile: Profile = {
  name: 'kulzhynskyi-kostiantyn',
  displayName: 'Kulzhynskyi\nKostiantyn',
  role: '> Network Engineer',
  github: `https://github.com/${githubHandle}`,
  githubHandle,
  website: websiteDomain,
  email: emailAddr,
  location: 'Boca Raton, FL',

  bio: `/**
 * About me
 * Network Engineer at Comcast (Boca Raton, FL).
 * Daily: end-to-end L1–L4 troubleshooting across
 * coax, fiber, Ethernet, and CPE beyond the
 * demarcation point — 5–12 service calls a day.
 *
 * Off-hours: self-hosted home lab built around an
 * 8-VLAN Zero Trust design on MikroTik RouterOS —
 * default-deny firewall, IDS/IPS, Twingate ZTNA,
 * Pi-hole DNS filtering, Docker services.
 *
 * Built a JS macro that runs local Ollama (gemma4)
 * with a Claude API fallback to power my Network+
 * study workflow in Obsidian.
 *
 * Before tech: 7 yrs as Business Analyst / Process
 * Automation Lead, leading a team of ~30.
 */`,

  experience: [
    {
      role: 'Network Engineer',
      company: 'Comcast',
      period: 'Oct 2024 – present',
      location: 'Boca Raton, FL',
      tags: ['TCP/IP', 'L1–L4', 'Fiber', 'VLANs', 'Troubleshooting'],
      desc: 'Resolve 5–12 network service calls per day — end-to-end L1–L4 troubleshooting from the physical plant through CPE, beyond the demarcation point. Configure routers, switches, mesh systems, and wireless APs; apply VLAN segmentation on customer premises. RF/DOCSIS signal diagnostics across coax, fiber, Ethernet, and RJ11.',
    },
    {
      role: 'Business Analyst / Process Automation Lead',
      company: 'Unique Trade Ko',
      period: '2016 – 2023',
      location: 'Remote',
      tags: ['Team Lead', 'Process Automation', 'CRM', 'Logistics', 'Internal Tooling'],
      desc: 'Led cross-functional process-automation initiatives across Sales, IT, Security, and Logistics for a 30-person team. Coordinated a CRM rollout, warehouse pipeline automation, and a logistics route-optimization system; launched a customer support call center from scratch.',
    },
  ],

  skills: {
    current: [
      'TCP/IP',
      'VLANs',
      'Subnetting',
      'Routing & Switching',
      'MikroTik RouterOS',
      'Firewall / IDS/IPS',
      'Wireshark',
      'Linux',
      'Docker',
      'Bash',
      'Python',
    ],
    learning: ['Security+', 'AWS', 'Terraform', 'Ansible'],
  },

  contacts: {
    email: emailAddr,
    github: `github.com/${githubHandle}`,
    website: websiteDomain,
    linkedin: `linkedin.com/in/${linkedinSlug}`,
    twitter: `@${twitterHandle}`,
  },

  socials: {
    github: `https://github.com/${githubHandle}`,
    twitter: `https://twitter.com/${twitterHandle}`,
    linkedin: `https://www.linkedin.com/in/${linkedinSlug}/`,
    website: `https://${websiteDomain}`,
  },

  helloBylines: [
    '// daily: tcp/ip · vlans · mikrotik · l1–l4',
    '// home lab: 8-vlan zero trust + ids/ips + vpn',
    '// studying for: comptia network+',
  ],

  openTo: [
    'Network Engineer roles (product company)',
    'Network / Systems Administrator',
    'Infrastructure Engineer',
    'No staffing agencies',
  ],
};
