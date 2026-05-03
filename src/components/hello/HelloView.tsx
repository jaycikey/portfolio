import { useNavigate } from 'react-router-dom';
import Token from '@/components/editor/Token';
import BgBlurs from '@/components/editor/BgBlurs';
import CodeSnippetPanel from './CodeSnippetPanel';
import { profile } from '@/data';
import { SH } from '@/lib/syntax-tokens';
import { C } from '@/theme/colors';

export default function HelloView() {
  const navigate = useNavigate();
  const [firstName, lastName] = profile.displayName.split('\n');

  return (
    <div className="hello-view relative flex min-h-0 flex-1 overflow-hidden">
      <BgBlurs />

      <div className="hello-left relative z-[1] flex min-w-0 flex-col justify-center" style={{ flex: '0 0 50%', padding: '40px 60px' }}>
        <div className="mb-3 font-mono text-base text-muted">Hi all. I am</div>
        <h1 className="m-0 mb-2 font-mono font-normal leading-[1.1] text-white" style={{ fontSize: 'clamp(32px, 4vw, 62px)' }}>
          {firstName}
          <br />
          {lastName}
        </h1>
        <div className="mb-10 mt-2 font-mono text-green" style={{ fontSize: 'clamp(14px, 1.8vw, 20px)' }}>
          {profile.role}
        </div>
        <div className="font-mono text-sm leading-[1.8] text-muted">
          {profile.helloBylines.map((line) => (
            <div key={line}>{line}</div>
          ))}
          <div className="mt-1">
            <Token color={SH.keyword}>const </Token>
            <Token color={SH.var}>githubLink</Token>
            <Token color={C.text}>{' = '}</Token>
            <Token color={SH.string}>{`"${profile.socials.github}"`}</Token>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => navigate('/_about-me')} className="cursor-pointer rounded-sm border-none bg-accent px-6 py-2.5 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-85">
            view-about-me
          </button>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="inline-block rounded-sm border border-border bg-transparent px-6 py-2.5 font-mono text-sm text-muted no-underline transition-colors hover:border-muted hover:text-white">
            github-profile
          </a>
        </div>
      </div>

      <div className="hello-right relative z-[1] flex min-w-0 items-center justify-center overflow-hidden" style={{ flex: '0 0 50%', padding: '32px 40px 32px 20px' }}>
        <CodeSnippetPanel />
      </div>
    </div>
  );
}
