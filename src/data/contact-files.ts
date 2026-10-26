import type { ContactFile } from '@/types/data';

export const contactFiles: ContactFile[] = [
  {
    id: 'email',
    name: '_email',
    filename: 'email.md',
    language: 'markdown',
    githubUrl: null,
    codePreview: `# email

cj@jayck.dev

---

## currently open to

- Network Technician / Network Support
- Data Center Technician
- Junior Network / Systems Administrator
- IT Infrastructure roles

## response time

Usually within 24 hours on weekdays.
Timezone: EST (UTC-5)

## preferred contact

Email is best for initial outreach.
Include a brief description of the role
or project so I can respond thoughtfully.`,
    customContent: null,
  },
 {
    id: 'github',
    name: '_github',
    filename: 'github.json',
    language: 'json',
    githubUrl: 'https://github.com/jaycikey',
    codePreview: `{
  "login": "jaycikey",
  "name": "Kostiantyn Kulzhynskyi",
  "bio": "Network Technician @ Comcast. Founder of JayCK Flow. Linux, networking & infrastructure.",
  "location": "Boca Raton, FL",
  "blog": "https://jayck.dev",
  "company": "Comcast",
  "twitter_username": "jaycikey",
  "public_repos": 1,
  "followers": 1,
  "following": 1,
  "pinned": [
    {
      "name": "portfolio",
      "description": "VS Code-inspired developer portfolio. React 18 + TypeScript + Vite + Tailwind.",
      "language": "TypeScript",
      "url": "https://github.com/jaycikey/portfolio"
    }
  ],
  "stats": {
    "current_focus": "CompTIA Network+",
    "stack": ["TCP/IP", "MikroTik", "Linux", "Docker", "Caddy", "Cloudflare", "Bash"],
    "learning": ["Network+", "Terraform", "AWS"]
  },
  "_note": "Live profile data will replace these stats soon (GitHub API integration in progress)."
}`,
    customContent: null,
  },
  {
    id: 'linkedin',
    name: '_linkedin',
    filename: 'linkedin.md',
    language: 'markdown',
    githubUrl: null,
    codePreview: `# Kostiantyn (CJ) Kulzhynskyi

linkedin.com/in/kostiantyn-kulzhynskyi/

---

## headline

Network Technician | Linux, Networking &
Infrastructure | Comcast | Founder, JayCK Flow
| CompTIA Network+ in progress

## summary

Network Technician at Comcast (Oct 2024–present)
— troubleshooting residential broadband and home
networks in the field, from the physical plant
through gateways, routers, and Wi-Fi.

I founded and build JayCK Flow — a money
calendar for iPhone and iPad, live on the App
Store — and run its production Linux server:
Docker, Caddy, Cloudflare, origin firewall,
SPF / DKIM / DMARC.

Off-hours I run a personal home lab: MikroTik
firewalling with automated IP blocklisting,
Pi-hole, Twingate, Docker services, a QNAP NAS.

Previously 7 years as Business Analyst / Process
Automation Lead for a 30-person team across
Sales, IT, Security, and Logistics.

Studying for CompTIA Network+.

## open to

Network Technician / Network Support,
Data Center Technician,
Junior Network / Systems Administrator,
IT Infrastructure roles.

## skills

TCP/IP · Subnetting · DNS / DHCP · NAT · Wi-Fi
DOCSIS / RF · MikroTik RouterOS · Firewall rules
Wireshark · Nmap · Linux · Docker · Caddy
Cloudflare · SPF / DKIM / DMARC · Bash · Python
Learning: Network+ · Terraform · AWS`,
    customContent: null,
  },
  {
    id: 'contact-form',
    name: '_contact-form',
    filename: 'contact-form.tsx',
    language: 'typescript',
    githubUrl: null,
    codePreview: null,
    customContent: 'ContactFormContent',
  },
  {
    id: 'find-me-also-in',
    name: '_find-me-also-in',
    filename: 'find-me-also-in.md',
    language: 'markdown',
    githubUrl: null,
    codePreview: null,
    customContent: 'FindMeAlsoInContent',
  },
];
