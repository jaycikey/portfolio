import Token from '@/components/editor/Token';
import { profile } from '@/data';
import { SH } from '@/lib/syntax-tokens';

export default function EmailContent() {
  const emailAddr = profile.contacts.email;

  return (
    <div className="font-mono">
      <div className="mb-4">
        <Token color={SH.comment}>{'// contact via email'}</Token>
      </div>
      <div className="mb-1 text-[15px] text-muted">email:</div>
      <a href={`mailto:${emailAddr}`} className="border-b border-green pb-0.5 text-base text-green no-underline">{emailAddr}</a>
      <div className="mt-5 text-[13px] leading-[1.8] text-muted">
        <div>{"// I'm currently open to:"}</div>
        <div className="mt-2 pl-4">
          {profile.openTo.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-green">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
