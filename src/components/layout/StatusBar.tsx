import { IconGithub, IconLinkedin, IconTwitter } from '@/components/icons';
import { profile } from '@/data';
import { C } from '@/theme/colors';

export default function StatusBar() {
  const ghHref = profile.socials.github;
  const twHref = profile.socials.twitter;
  const liHref = profile.socials.linkedin;
  const handleLabel = profile.contacts.twitter;
  const dimColor = C.muted;
  const linkClass = 'flex text-muted transition-colors duration-150 hover:text-white';

  return (
    <footer className="flex h-9 shrink-0 items-center justify-between border-t border-border px-4">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[13px] text-muted">find me in:</span>
        <div className="flex items-center gap-3">
          <a href={ghHref} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="GitHub"><IconGithub size={16} color="currentColor" /></a>
          <a href={twHref} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Twitter"><IconTwitter size={16} color="currentColor" /></a>
          <a href={liHref} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="LinkedIn"><IconLinkedin size={16} color="currentColor" /></a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[13px] text-muted">{handleLabel}</span>
        <IconGithub size={16} color={dimColor} />
      </div>
    </footer>
  );
}
