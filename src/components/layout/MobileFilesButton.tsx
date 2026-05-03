import { IconFolder } from '@/components/icons';
import { C } from '@/theme/colors';

interface Props {
  activeTab: string;
  openCount: number;
  onClick: () => void;
}

const SIDEBAR_PATHS = ['/_about-me', '/_projects', '/_home-lab', '/_contact-me'];

export default function MobileFilesButton({
  activeTab,
  openCount,
  onClick,
}: Props) {
  const hasSidebar = SIDEBAR_PATHS.includes(activeTab);
  if (!hasSidebar) return null;

  const label = openCount > 0 ? `_files (${openCount})` : '_files';

  return (
    <div
      className="mobile-files-btn sticky bottom-0 left-0 right-0 z-10 hidden h-11 shrink-0 cursor-pointer items-center gap-2 border-t border-border bg-surface px-4"
      onClick={onClick}
      role="button"
      aria-label="Open files"
    >
      <IconFolder color={C.orange} size={14} />
      <span className="flex-1 font-mono text-[13px] text-muted">{label}</span>
      <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
        <path
          d="M2 7l3-3 3 3"
          stroke={C.muted}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
