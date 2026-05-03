import { useState } from 'react';
import Token from '@/components/editor/Token';
import { SH } from '@/lib/syntax-tokens';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL: FormState = { name: '', email: '', message: '' };

const TEXT_FIELDS: { key: 'name' | 'email'; label: string; type: string; placeholder: string }[] = [
  { key: 'name', label: '_name:', type: 'text', placeholder: 'Your name' },
  { key: 'email', label: '_email:', type: 'email', placeholder: 'you@example.com' },
];

export default function ContactFormContent() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      setForm(INITIAL);
    }, 4000);
  };

  const inputClass =
    'box-border w-full rounded-md border border-border bg-card px-3.5 py-2.5 font-mono text-sm text-white outline-none transition-colors focus:border-green';

  return (
    <div className="max-w-[480px] px-6 py-5">
      <div className="mb-5 font-mono">
        <Token color={SH.comment}>{'// send a message'}</Token>
      </div>
      {sent ? (
        <div className="rounded-lg border border-green bg-[rgba(67,217,173,0.08)] p-5 font-mono text-sm text-green">
          ✓ message sent!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {TEXT_FIELDS.map((field) => (
            <div key={field.key}>
              <div className="mb-1.5 font-mono text-[13px] text-muted">
                {field.label}
              </div>
              <input
                type={field.type}
                required
                placeholder={field.placeholder}
                value={form[field.key]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [field.key]: e.target.value }))
                }
                className={inputClass}
              />
            </div>
          ))}
          <div>
            <div className="mb-1.5 font-mono text-[13px] text-muted">_message:</div>
            <textarea
              required
              rows={5}
              placeholder="Your message..."
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className={`${inputClass} min-h-[100px] resize-y`}
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer self-start rounded-md border-none bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-85"
          >
            submit-message
          </button>
        </form>
      )}
    </div>
  );
}
