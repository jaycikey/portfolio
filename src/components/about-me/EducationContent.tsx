import Token from '@/components/editor/Token';
import { education } from '@/data';
import { SH } from '@/lib/syntax-tokens';

export default function EducationContent() {
  return (
    <div className="font-mono">
      <div className="mb-5">
        <Token color={SH.comment}>{'// education & training'}</Token>
      </div>
      <div className="flex flex-col gap-5">
        {education.map((item, i) => (
          <div
            key={i}
            className="relative border-l-2 border-border pl-5"
          >
            <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-green" />
            <div className="mb-1 text-xs text-muted">{item.period}</div>
            <div className="mb-0.5 text-sm text-white">{item.title}</div>
            <div className="mb-1.5 text-[13px] text-blue">{item.place}</div>
            <div className="text-[13px] leading-[1.6] text-muted">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
