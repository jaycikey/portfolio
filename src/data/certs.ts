import type { Cert, CertStatus } from '@/types/data';
import { C } from '@/theme/colors';

export const certs: Cert[] = [
  {
    id: 'comptia-network',
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    status: 'in-progress',
    target: 'Aug 2026',
    note: 'N10-009. Studying daily with Obsidian + AI flashcards.',
  },
  {
    id: 'comptia-security',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'planned',
    target: 'Nov 2026',
    note: 'Next after Network+. Foundation for network and cloud security.',
  },
  {
    id: 'aws-ccp',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon AWS',
    status: 'planned',
    target: 'Early 2027',
    note: 'Cloud fundamentals. Hands-on labs on AWS Free Tier.',
  },
  {
    id: 'terraform',
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    status: 'planned',
    target: '2027',
    note: 'IaC cert. After hands-on home lab automation work.',
  },
  {
    id: 'goit-fullstack',
    name: 'Full-Stack Developer Certificate',
    issuer: 'GoIT',
    status: 'done',
    target: '2024',
    note: 'JavaScript, TypeScript, React, Node.js, MongoDB.',
  },
];

export const CERT_STATUS: Record<CertStatus, { icon: string; color: string }> = {
  done: { icon: '✓', color: C.green },
  'in-progress': { icon: '◐', color: C.orange },
  planned: { icon: '○', color: C.muted },
};
