import type { Profile } from '@/types/data';

const githubHandle = 'jaycikey';
const twitterHandle = 'jaycikey';
const linkedinSlug = 'kostiantyn-kulzhynskyi';
const websiteDomain = 'jayck.dev';
const emailAddr = 'cj@jayck.dev';

export const profile: Profile = {
  name: 'kulzhynskyi-kostiantyn',
  displayName: 'Kulzhynskyi\nKostiantyn',
  role: '> Network Technician | Linux, Networking & Infrastructure',
  github: `https://github.com/${githubHandle}`,
  githubHandle,
  website: websiteDomain,
  email: emailAddr,
  location: 'Boca Raton, FL',

  bio: `/**
 * About me
 * Network Technician at Comcast (Boca Raton, FL).
 * In the field daily — troubleshooting residential
 * broadband and home networks from the physical
 * plant through gateways, routers, and Wi-Fi.
 *
 * Founder and solo engineer of JayCK Flow — a
 * money calendar for iPhone and iPad, live on the
 * App Store. I run its production Linux server too:
 * Docker behind Caddy and Cloudflare, origin
 * firewall locked to Cloudflare's IP ranges,
 * SPF/DKIM/DMARC on the domain.
 *
 * Off-hours: a personal home lab — MikroTik
 * firewalling with automated IP blocklisting,
 * Pi-hole DNS filtering, Twingate remote access,
 * Docker services, a QNAP NAS, a home rack.
 *
 * Built a JS macro that runs local Ollama (gemma4)
 * with a Claude API fallback to power my Network+
 * study workflow in Obsidian.
 *
 * Before tech: 7 yrs as Business Analyst / Process
 * Automation Lead for a 30-person team.
 */`,

  experience: [
    {
      role: 'Network Technician',
      company: 'Comcast',
      period: 'Oct 2024 – present',
      location: 'Boca Raton, FL',
      tags: ['TCP/IP', 'DOCSIS / RF', 'Wi-Fi', 'Cabling', 'Troubleshooting'],
      desc: 'Resolve multiple service calls daily, diagnosing connectivity and equipment issues from the physical plant (coax, fiber, Ethernet, RJ11) through gateways, routers, and Wi-Fi. RF/DOCSIS signal diagnostics; install and configure gateways, routers, switches, mesh Wi-Fi, and access points; terminate and test Ethernet and work with patch panels in multi-dwelling and commercial telecom closets.',
    },
    {
      role: 'Founder & Solo Engineer',
      company: 'JAYCIKEY LLC — JayCK Flow',
      period: '2026 – present',
      location: 'Boca Raton, FL',
      tags: ['iOS', 'React', 'Capacitor', 'Node.js', 'Docker', 'Cloudflare'],
      desc: "Shipped JayCK Flow, a money calendar for iPhone and iPad, live on the App Store with paying subscribers. Run the production API on a Hetzner Linux VPS — Node.js/Express in Docker behind Caddy and Cloudflare, origin firewall locked to Cloudflare's IPv4/IPv6 ranges; SPF, DKIM, and DMARC (p=quarantine) passing; end-to-end encrypted sync (PBKDF2 + AES-256-GCM). Every release gated on type checks, 60+ test files, a production build, and real-device testing.",
    },
    {
      role: 'Business Analyst / Process Automation Lead',
      company: 'Unique Trade Ko',
      period: '2016 – 2023',
      location: 'Ukraine',
      tags: ['Team Lead', 'Process Automation', 'CRM', 'Logistics', 'Documentation'],
      desc: 'Led process-improvement projects across Sales, IT, Security, and Logistics for a 30-person team. Partnered with IT to deploy a CRM, web and mobile apps, and a warehouse receiving-to-packaging pipeline; designed an automated delivery route-planning system; set up a customer support call center and wrote documentation and training for every system rolled out.',
    },
  ],

  skills: {
    current: [
      'TCP/IP',
      'Subnetting',
      'DNS / DHCP / NAT',
      'Routing & Switching',
      'Wi-Fi',
      'DOCSIS / RF',
      'MikroTik RouterOS',
      'Firewall rules',
      'Wireshark / Nmap',
      'Linux',
      'Docker',
      'Caddy',
      'Cloudflare',
      'SPF / DKIM / DMARC',
      'Bash',
      'Python',
      'Node.js / TypeScript',
    ],
    learning: ['Network+', 'Terraform', 'AWS'],
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
    '// daily: tcp/ip · docsis · wi-fi · cabling',
    '// home lab: mikrotik · pi-hole · docker · twingate',
    '// studying for: comptia network+',
  ],

  openTo: [
    'Network Technician / Network Support',
    'Data Center Technician',
    'Junior Network / Systems Administrator',
    'IT Infrastructure roles',
  ],
};
