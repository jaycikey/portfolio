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

- Platform / Infrastructure Engineer roles
- Cloud / DevOps Engineer (product company)
- IaC / Automation Engineer
- Contract automation / scripting work

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
  "bio": "Field Tech → Platform Engineer. Home lab + IaC + AI tooling.",
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
    "current_focus": "CompTIA Network+ → AWS Cloud Practitioner → Terraform",
    "stack": ["Linux", "Docker", "MikroTik", "Bash", "Python", "Node.js"],
    "learning": ["AWS", "Terraform", "Ansible", "Kubernetes"]
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

Building toward Platform / Infrastructure Engineer
| Linux • Docker • Python • AWS • Terraform
| Home Lab Automation | Network+ in progress

## summary

7+ years as Business Analyst and Team Lead
(~30 people) before pivoting to hands-on
infrastructure work.

Currently at Comcast (Oct 2024–present)
performing Layer 1–3 network troubleshooting
in production environments daily.

Building toward Platform / Infrastructure
Automation Engineering — focused on building
infrastructure with code, not operating it.

Cert path: Network+ → Security+ →
AWS Cloud Practitioner → AWS SAA →
Terraform Associate.

## open to

Platform / Infrastructure Engineer,
Cloud / DevOps Engineer (product company),
IaC / Automation Engineer roles.
Remote or hybrid preferred.

## skills

Linux · Docker · MikroTik · TCP/IP · Python
Bash · Git · React · Node.js
Learning: AWS · Terraform · Ansible · Kubernetes`,
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
