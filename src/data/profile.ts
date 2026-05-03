import type { Profile } from '@/types/data';

const githubHandle = 'jaycikey';
const twitterHandle = 'jaycikey';
const linkedinSlug = 'kostiantyn-kulzhynskyi';
const websiteDomain = 'jayck.dev';
const emailAddr = 'cj@jayck.dev';

export const profile: Profile = {
  name: 'kulzhynskyi-kostiantyn',
  displayName: 'Kulzhynskyi\nKostiantyn',
  role: '> DevOps / Cloud Engineer',
  github: `https://github.com/${githubHandle}`,
  githubHandle,
  website: websiteDomain,
  email: emailAddr,
  location: 'Boca Raton, FL',

  bio: `/**
 * About me
 * Field Tech at Comcast (Boca Raton, FL).
 * Daily: TCP/IP, fiber, DOCSIS — layer-1
 * to layer-3 troubleshooting at scale.
 *
 * Off-hours: self-hosted infra on QNAP +
 * Pi 5, MikroTik firewall with custom
 * defense-in-depth rules, Twingate ZTNA,
 * Windows-in-Docker on an Omarchy laptop.
 *
 * Built a JS macro that runs local Ollama
 * (gemma4) with Claude API fallback to power
 * my Network+ study workflow in Obsidian.
 *
 * Transitioning into Cloud / DevOps.
 * Previously led a team of ~30 (7 yrs) as
 * Business Analyst.
 */`,

  experience: [
    {
      role: 'Field Technician',
      company: 'Comcast',
      period: 'Oct 2024 – present',
      location: 'Boca Raton, FL',
      tags: ['TCP/IP', 'DOCSIS', 'Fiber', 'Troubleshooting'],
      desc: 'Install and maintain residential & commercial network infrastructure. Diagnose layer-1 to layer-3 issues across coax, fiber, and IP layers. Work directly with customer-facing equipment, headend signal paths, and DOCSIS modems daily.',
    },
    {
      role: 'Business Analyst / Team Lead',
      company: 'Previous Employer',
      period: '2016 – 2023',
      location: 'Remote',
      tags: ['Team Lead', 'Process Automation', 'Stakeholder Mgmt', 'Internal Tooling'],
      desc: 'Led cross-functional team of ~30. Owned process-automation initiatives, built internal tooling with React & Node, drove measurable reductions in manual operational overhead.',
    },
  ],

  skills: {
    current: [
      'Linux',
      'Docker',
      'MikroTik RouterOS',
      'TCP/IP',
      'Networking',
      'Bash',
      'React',
      'Node.js',
    ],
    learning: ['AWS', 'Terraform', 'Kubernetes', 'CI/CD', 'Ansible'],
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
    '// daily: linux · mikrotik · docker · ollama',
    '// home lab + comcast field tech + obsidian',
  ],

  openTo: [
    'DevOps / Cloud Engineer roles',
    'Junior SysAdmin / Infrastructure',
    'NOC / MSP Network Engineer',
    'Contract automation / scripting work',
  ],
};
