import type { Cert, CertStatus } from '@/types/data';
import { C } from '@/theme/colors';

export const certs: Cert[] = [
  {
    id: 'comptia-network',
    name: 'CompTIA Network+',
    issuer: 'CompTIA',
    status: 'in-progress',
    target: 'Q2 2026',
    note: 'N10-009. Studying daily with Obsidian + AI flashcards.',
  },
  {
    id: 'comptia-security',
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    status: 'planned',
    target: 'Q3 2026',
    note: 'Next after Network+.',
  },
  {
    id: 'aws-ccp',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon AWS',
    status: 'planned',
    target: 'Q4 2026',
    note: 'Foundation cert before Solutions Architect Associate.',
  },
  {
    id: 'aws-saa',
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon AWS',
    status: 'planned',
    target: 'Q1 2027',
    note: 'Next after AWS Cloud Practitioner.',
  },
  {
    id: 'terraform',
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    status: 'planned',
    target: '2027',
    note: 'IaC cert. After hands-on home lab work.',
  },
  {
    id: 'ckad',
    name: 'CKAD',
    issuer: 'Linux Foundation',
    status: 'planned',
    target: '2027',
    note: 'Kubernetes app dev cert.',
  },
];

export const CERT_STATUS: Record<CertStatus, { icon: string; color: string }> = {
  done: { icon: '✓', color: C.green },
  'in-progress': { icon: '◐', color: C.orange },
  planned: { icon: '○', color: C.muted },
};
