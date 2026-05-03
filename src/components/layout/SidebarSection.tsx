import type { ReactNode } from 'react';
import { IconChevron, IconFolder } from '@/components/icons';
import { C } from '@/theme/colors';

interface Props {
  label: string;
  open: boolean;
  onToggle: () => void;
  iconColor: string;
  children: ReactNode;
}

export default function SidebarSection({
  label,
  open,
  onToggle,
  iconColor,
  children,
}: Props) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center gap-1.5 border-none border-b border-b-border bg-transparent px-3 py-2.5 text-left font-mono text-sm text-white"
      >
        <IconChevron open={open} color={C.muted} size={10} />
        <IconFolder color={iconColor} size={14} />
        <span className="ml-1">{label}</span>
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}
