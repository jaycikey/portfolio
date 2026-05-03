import type { ReactNode } from 'react';
import Token from '@/components/editor/Token';
import { IconGithub, IconLinkedin, IconTwitter } from '@/components/icons';
import { profile } from '@/data';
import { SH } from '@/lib/syntax-tokens';
import { C } from '@/theme/colors';

interface Entry {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}

export default function FindMeAlsoInContent() {
  const { contacts, socials } = profile;

  const entries: Entry[] = [
    {
      label: 'GitHub',
      value: contacts.github,
      href: socials.github,
      icon: <IconGithub size={16} color={C.muted} />,
    },
    {
      label: 'Twitter',
      value: contacts.twitter,
      href: socials.twitter,
      icon: <IconTwitter size={16} color={C.muted} />,
    },
    {
      label: 'LinkedIn',
      value: contacts.linkedin,
      href: socials.linkedin,
      icon: <IconLinkedin size={16} color={C.muted} />,
    },
    {
      label: 'Website',
      value: contacts.website,
      href: socials.website,
      icon: <span className="font-mono text-sm text-muted">🌐</span>,
    },
  ];

  return (
    <div className="px-6 py-5">
      <div className="mb-5 font-mono">
        <Token color={SH.comment}>{'// find me also in'}</Token>
      </div>
      <div className="flex max-w-[360px] flex-col gap-3">
        {entries.map((entry) => (
          <a key={entry.label} href={entry.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 no-underline transition-colors hover:border-muted">
            {entry.icon}
            <div>
              <div className="font-mono text-xs text-muted">{entry.label}</div>
              <div className="font-mono text-[13px] text-white">{entry.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
