import Token from '@/components/editor/Token';
import { profile } from '@/data';
import { SH } from '@/lib/syntax-tokens';

export default function BioContent() {
  return (
    <div className="font-mono text-[15px] leading-[1.8]">
      {profile.bio.split('\n').map((line, i) => {
        const trimmed = line.trim();
        const isComment =
          trimmed.startsWith('*') ||
          trimmed.startsWith('/*') ||
          trimmed.startsWith('//');
        return (
          <div key={i}>
            <Token color={isComment ? SH.comment : '#FFFFFF'}>{line}</Token>
          </div>
        );
      })}

      <div className="mt-6">
        <div>
          <Token color={SH.comment}>{'// current stack'}</Token>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {profile.skills.current.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-green bg-[rgba(67,217,173,0.08)] px-2.5 py-[3px] font-mono text-xs text-green"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <div>
            <Token color={SH.comment}>{'// learning'}</Token>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.skills.learning.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-blue bg-[rgba(77,91,206,0.08)] px-2.5 py-[3px] font-mono text-xs text-blue-light"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
