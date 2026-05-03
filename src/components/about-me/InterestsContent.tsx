import Token from '@/components/editor/Token';
import { interests } from '@/data';
import { SH } from '@/lib/syntax-tokens';

export default function InterestsContent() {
  return (
    <div className="font-mono">
      <div className="mb-5">
        <Token color={SH.comment}>{'// personal interests & hobbies'}</Token>
      </div>
      <div
        className="grid gap-3.5"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}
      >
        {interests.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="mb-2 text-2xl">{item.icon}</div>
            <div className="mb-1.5 text-sm text-white">{item.label}</div>
            <div className="text-xs leading-[1.6] text-muted">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
