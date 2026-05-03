import type { AboutSections } from '@/types/data';

export const aboutSections: AboutSections = {
  personal: [
    { id: 'bio', label: 'bio', icon: '🌱' },
    { id: 'interests', label: 'interests', icon: '🎮' },
    { id: 'education', label: 'education', icon: '🎓' },
  ],
  certifications: [
    {
      id: 'cert-roadmap',
      label: 'cert-roadmap.md',
      icon: '📄',
      filename: 'cert-roadmap.md',
    },
  ],
  contacts: [
    { id: 'email', label: 'email', icon: '✉' },
    { id: 'github', label: 'github', icon: '', githubIcon: true },
  ],
};
