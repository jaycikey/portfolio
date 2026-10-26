import type { Cert, CertStatus } from '@/types/data';
import { C } from '@/theme/colors';

export const certs: Cert[] = [
  {
    id: 'comptia-network',
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    status: 'in-progress',
    target: '2026',
    note: 'N10-009. Studying daily with Obsidian + AI flashcards.',
  },
  {
    id: 'aws-ccp',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon AWS',
    status: 'planned',
    target: 'after Network+',
    note: 'Learning AWS fundamentals now.',
  },
  {
    id: 'terraform',
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    status: 'planned',
    target: 'after Network+',
    note: 'Learning Terraform now.',
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
