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

- DevOps / Cloud Engineer roles
- Junior SysAdmin / Infrastructure
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
  "bio": "Field Tech → Cloud/DevOps. Home lab + AI tooling.",
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
    "current_focus": "CompTIA Network+ → AWS Cloud Practitioner",
    "stack": ["Linux", "Docker", "MikroTik", "Bash", "React", "Node.js"],
    "learning": ["AWS", "Terraform", "Kubernetes", "Ansible"]
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

Field Technician at Comcast →
Transitioning into Cloud / DevOps Engineering

## summary

7+ years as Business Analyst and Team Lead
(~30 people) before pivoting to hands-on
infrastructure work.

Currently at Comcast (Oct 2024–present)
installing and troubleshooting residential
and commercial network infrastructure daily.

Studying toward: Network+ → Security+ →
AWS Cloud Practitioner → DevOps tooling.

## open to

Remote or hybrid DevOps / Cloud Engineer,
Junior SysAdmin, or Infrastructure roles.
Contract automation / scripting work welcome.

## skills

Linux · Docker · MikroTik · TCP/IP
React · Node.js · Bash · Ansible (learning)
AWS · Terraform · Kubernetes (in progress)`,
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
