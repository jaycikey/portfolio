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

- Network Engineer roles (product company)
- Network / Systems Administrator
- Infrastructure Engineer
- No staffing agencies

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
  "bio": "Network Engineer @ Comcast. L1–L4 networking + Zero Trust home lab.",
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
    "current_focus": "CompTIA Network+ → Security+ → AWS Cloud Practitioner",
    "stack": ["TCP/IP", "VLANs", "MikroTik", "Linux", "Docker", "Bash"],
    "learning": ["Security+", "AWS", "Terraform", "Ansible"]
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

Network Engineer | Comcast | TCP/IP • VLANs •
MikroTik • Firewall • IDS/IPS • Linux • Docker
| CompTIA Network+ in progress

## summary

Network Engineer at Comcast (Oct 2024–present)
— end-to-end L1–L4 troubleshooting across coax,
fiber, Ethernet, and CPE beyond the demarcation
point, 5–12 service calls a day.

Previously 7 years as Business Analyst / Process
Automation Lead, leading a 30-person team across
Sales, IT, Security, and Logistics.

Off-hours I run a self-hosted home lab built on
an 8-VLAN Zero Trust design — default-deny
firewall, IDS/IPS, Twingate ZTNA, Pi-hole.

Cert path: Network+ → Security+ →
AWS Cloud Practitioner → Terraform Associate.

## open to

Network Engineer (product company),
Network / Systems Administrator,
Infrastructure Engineer.
No staffing agencies.

## skills

TCP/IP · VLANs · Subnetting · Routing & Switching
MikroTik RouterOS · Firewall · IDS/IPS · Wireshark
Linux · Docker · Bash · Python · Git
Learning: Security+ · AWS · Terraform · Ansible`,
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
