import Token from '@/components/editor/Token';
import { SNIPPET_LINES } from '@/data/snippet';
import { snippetMeta } from '@/data';
import { C } from '@/theme/colors';

const MAC_DOTS = ['#FF5F57', '#FEBC2E', '#28C840'];

export default function CodeSnippetPanel() {
  return (
    <div className="snippet-panel flex w-full max-w-[620px] flex-col self-center overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex h-8 shrink-0 items-center gap-2 border-b border-border px-3">
        <div className="flex items-center gap-1.5">
          {MAC_DOTS.map((color, i) => (
            <div key={i} className="h-[11px] w-[11px] shrink-0 rounded-full" style={{ background: color }} />
          ))}
        </div>
        <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center font-mono text-xs text-muted">
          {snippetMeta.filename}
        </span>
        <a href={snippetMeta.githubUrl} target="_blank" rel="noopener noreferrer" className="snippet-view-link shrink-0 whitespace-nowrap font-mono text-[11px] text-muted no-underline transition-colors duration-150 hover:text-white">
          <span className="snippet-link-text">view full file </span>→
        </a>
      </div>

      <div className="flex flex-1 overflow-x-auto overflow-y-hidden">
        <div className="snippet-gutter w-10 shrink-0 select-none border-r border-border py-3.5 pr-2.5 text-right font-mono text-[13px] leading-5 text-muted opacity-45">
          {SNIPPET_LINES.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <div className="code-body min-w-0 flex-1 whitespace-pre p-[14px_16px] font-mono text-[13px] leading-5">
          {SNIPPET_LINES.map((tokens, i) => (
            <div key={i} className="min-h-5">
              {tokens.map(([text, color], j) => (
                <Token key={j} color={color}>{text}</Token>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex min-h-7 shrink-0 flex-wrap items-center justify-between gap-1.5 border-t border-border px-3.5 py-1">
        <span className="whitespace-nowrap font-mono text-[11px] text-muted">
          {snippetMeta.byline}
        </span>
        <div className="flex flex-wrap gap-[5px]">
          {snippetMeta.badges.map((badge) => (
            <span key={badge} className="whitespace-nowrap rounded-sm border border-[rgba(67,217,173,0.25)] bg-[rgba(67,217,173,0.07)] px-[7px] py-px font-mono text-[10px]" style={{ color: C.green }}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
