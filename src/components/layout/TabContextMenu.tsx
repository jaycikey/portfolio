import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { projects, homeLab } from '@/data';
import type { FileTabsApi, Tab } from '@/types/tabs';

interface Props {
  x: number;
  y: number;
  tab: Tab;
  tabs: Tab[];
  fileTabs: FileTabsApi;
  onClose: () => void;
}

export default function TabContextMenu({
  x,
  y,
  tab,
  tabs,
  fileTabs,
  onClose,
}: Props) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x, y });

  // Bug 5 fix: measure in useLayoutEffect → no flicker
  useLayoutEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let nx = x;
    let ny = y;
    if (x + rect.width > window.innerWidth) nx = x - rect.width;
    if (y + rect.height > window.innerHeight) ny = y - rect.height;
    setPos({ x: nx, y: ny });
    setVisible(true);
  }, [x, y]);

  // Bug 4 fix: defer outside-click listener so opening click doesn't immediately close.
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const t = window.setTimeout(
      () => window.addEventListener('mousedown', onMouseDown),
      0,
    );
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const { closeTab, closeOthers, closeAll } = fileTabs;
  const onlyOne = tabs.length === 1;

  const itemBase =
    'flex h-7 select-none items-center rounded px-3 font-mono text-[13px] transition-colors duration-100';

  const Item = ({
    label,
    onClick: handleClick,
    disabled,
  }: {
    label: string;
    onClick: () => void;
    disabled: boolean;
  }) => (
    <div
      className={cn(
        itemBase,
        disabled
          ? 'cursor-not-allowed text-muted opacity-40'
          : 'cursor-pointer text-white hover:bg-[rgba(96,123,150,0.12)]',
      )}
      onClick={
        disabled
          ? undefined
          : () => {
              handleClick();
              onClose();
            }
      }
    >
      {label}
    </div>
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(tab.label).then(() => {
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1200);
    });
  };

  const projectItem = [...projects, ...homeLab].find(
    (p) =>
      p.name === tab.id || p.name.toLowerCase().replace(/\s+/g, '-') === tab.id,
  );
  const githubUrl = projectItem ? projectItem.githubUrl : null;

  return (
    <div
      ref={menuRef}
      className="fixed z-[200] min-w-[180px] rounded-md border border-border bg-card p-1 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-opacity duration-[80ms]"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Item label="Close" onClick={() => closeTab(tab.id)} disabled={false} />
      <Item
        label="Close Others"
        onClick={() => closeOthers(tab.id)}
        disabled={onlyOne}
      />
      <Item label="Close All" onClick={() => closeAll()} disabled={false} />
      <div className="my-1 h-px bg-border" />
      <Item
        label="Reveal in GitHub"
        onClick={() => {
          if (githubUrl) window.open(githubUrl, '_blank', 'noopener');
        }}
        disabled={!githubUrl}
      />
      <div
        className={cn(
          itemBase,
          'cursor-pointer text-white hover:bg-[rgba(96,123,150,0.12)]',
        )}
        onClick={handleCopy}
      >
        {copied ? <span className="text-green">copied!</span> : 'Copy filename'}
      </div>
    </div>
  );
}
