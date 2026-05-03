import { useEffect, useState } from 'react';
import LineNumbers from '@/components/layout/LineNumbers';
import { IconGithub } from '@/components/icons';
import Token from './Token';
import { renderCodeLine } from '@/lib/syntax';
import { SH } from '@/lib/syntax-tokens';
import { C } from '@/theme/colors';
import ContactFormContent from '@/components/contact/ContactFormContent';
import FindMeAlsoInContent from '@/components/contact/FindMeAlsoInContent';
import type { FileItem, ContactFile, CustomContentKey } from '@/types/data';
import type { ComponentType } from 'react';

export type ItemType = 'project' | 'homelab' | 'contact';

interface Props {
  item: FileItem | ContactFile;
  itemType: ItemType;
}

const CUSTOM_MAP: Record<CustomContentKey, ComponentType> = {
  ContactFormContent,
  FindMeAlsoInContent,
};

export default function FileContent({ item, itemType }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 30);
    return () => window.clearTimeout(t);
  }, []);

  const lines = (item.codePreview || '').split('\n');
  const hasCode = !!item.codePreview;

  const customKey = 'customContent' in item ? (item.customContent as CustomContentKey | null) : null;
  const CustomNode = customKey ? CUSTOM_MAP[customKey] : null;

  const folder = itemType === 'project' ? 'projects' : itemType === 'homelab' ? 'homelab' : 'contact';

  const fileItem = item as FileItem;
  const githubHref = item.githubUrl;

  return (
    <div className="flex flex-1 flex-col overflow-hidden transition-opacity duration-150 ease-in-out" style={{ opacity: visible ? 1 : 0 }}>
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2">
        <span className="breadcrumb-path min-w-0 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[13px] text-muted">
          <Token color={C.muted}>~/</Token>
          <Token color={SH.comment}>{folder}</Token>
          <Token color={C.muted}>/</Token>
          <Token color={C.text}>{item.filename}</Token>
        </span>

        {githubHref && (
          <a href={githubHref} target="_blank" rel="noopener noreferrer" className="reveal-btn flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded border border-border px-2.5 py-[5px] font-mono text-xs text-muted no-underline transition-colors duration-150 hover:border-muted hover:text-white">
            <IconGithub size={12} color="currentColor" />
            <span>reveal-in-github →</span>
          </a>
        )}
      </div>

      <div className="flex min-h-0 flex-1 overflow-hidden">
        {hasCode && <LineNumbers count={lines.length + 4} />}
        <div className="flex flex-1 flex-col overflow-y-auto" style={{ padding: hasCode ? '16px 20px' : 0, gap: hasCode ? 24 : 0 }}>
          {CustomNode && <CustomNode />}

          {hasCode && (
            <>
              <div className="font-mono text-[13px] leading-[22px]">
                {lines.map((line, i) => (
                  <div key={i} className="min-h-[22px] whitespace-pre-wrap break-all">
                    {renderCodeLine(line, item.language)}
                  </div>
                ))}
              </div>

              {fileItem.desc && (
                <div className="flex flex-col gap-3 border-t border-border pt-5">
                  <div className="font-mono text-[13px] text-muted">
                    <Token color={SH.comment}>{'// '}</Token>
                    <Token color={C.text}>{fileItem.name || fileItem.filename}</Token>
                  </div>
                  <p className="m-0 font-mono text-[13px] leading-[1.7] text-muted">
                    {fileItem.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {(fileItem.tags || []).map((tag) => (
                      <span key={tag} className="rounded-sm border border-[rgba(67,217,173,0.25)] bg-[rgba(67,217,173,0.07)] px-2 py-0.5 font-mono text-[11px] text-green">
                        {tag}
                      </span>
                    ))}
                    {fileItem.stars != null && (
                      <span className="ml-1 font-mono text-xs text-muted">★ {fileItem.stars}</span>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
