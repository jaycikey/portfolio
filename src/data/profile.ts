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
 * Network Technician at Comcast (Boca Raton, FL).
 * Daily: end-to-end L1–L4 troubleshooting across
 * coax, fiber, Ethernet, and CPE beyond the
 * demarcation point — 5–12 service calls a day.
 *
 * Founder and solo engineer of JayCK Flow — a
 * money calendar for iPhone and iPad, live on the
 * App Store. I run its production stack as well:
 * Hetzner VPS behind Cloudflare and Caddy, origin
 * locked to Cloudflare's IP ranges, zero-knowledge
 * encrypted sync, SPF/DKIM/DMARC on the domain.
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
      role: 'Network Technician',
      company: 'Comcast',
      period: 'Oct 2024 – present',
      location: 'Boca Raton, FL',
      tags: ['TCP/IP', 'L1–L4', 'Fiber', 'VLANs', 'Troubleshooting'],
      desc: 'Resolve 5–12 network service calls per day — end-to-end L1–L4 troubleshooting from the physical plant through CPE, beyond the demarcation point. Configure routers, switches, mesh systems, and wireless APs; apply VLAN segmentation on customer premises. RF/DOCSIS signal diagnostics across coax, fiber, Ethernet, and RJ11.',
    },
    {
      role: 'Founder & Solo Engineer',
      company: 'JAYCIKEY LLC — JayCK Flow',
      period: '2026 – present',
      location: 'Boca Raton, FL',
      tags: ['iOS', 'React', 'Capacitor', 'Node.js', 'Docker', 'Cloudflare'],
      desc: "Shipped JayCK Flow, a money calendar for iPhone and iPad, live on the App Store with paying subscribers. Run the production API on a Hetzner VPS — Node.js/Express in Docker behind Caddy and Cloudflare, origin locked to Cloudflare's IPv4/IPv6 ranges; SPF, DKIM, and DMARC passing; zero-knowledge encrypted sync.",
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
      'Cloudflare',
      'Caddy',
      'SPF / DKIM / DMARC',
      'Bash',
      'Python',
      'Node.js / TypeScript',
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
    '// shipped: jayck flow · money calendar · app store',
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
