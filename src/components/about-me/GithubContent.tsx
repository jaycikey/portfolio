import Token from '@/components/editor/Token';
import { IconGithub } from '@/components/icons';
import { profile, projects } from '@/data';
import { SH } from '@/lib/syntax-tokens';
import { C } from '@/theme/colors';

export default function GithubContent() {
  const githubLabel = profile.contacts.github;
  const githubHref = profile.socials.github;
  const iconColor = C.green;

  return (
    <div className="font-mono">
      <div className="mb-4">
        <Token color={SH.comment}>{'// github profile'}</Token>
      </div>
      <a href={githubHref} target="_blank" rel="noopener noreferrer" className="mb-5 flex items-center gap-2.5 text-[15px] text-green no-underline"><IconGithub size={18} color={iconColor} /><span className="ml-2.5">{githubLabel}</span></a>
      <div className="text-[13px] leading-[1.8] text-muted">
        <div>{'// pinned repositories'}</div>
        <div className="mt-3 flex flex-col gap-2">
          {projects.slice(0, 3).map((p) => (
            <div key={p.name} className="flex items-center justify-between rounded-md border border-border bg-card px-3.5 py-2.5">
              <div>
                <div className="mb-0.5 text-[13px] text-blue-light">{p.name}</div>
                <div className="text-xs text-muted">{p.lang}</div>
              </div>
              <div className="text-xs text-muted">★ {p.stars}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
