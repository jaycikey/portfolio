import { cn } from '@/lib/cn';
import { navTabs } from '@/data/tabs';

interface Props {
  activeTab: string;
  onTabChange: (path: string) => void;
  onClose: () => void;
}

export default function MobileMenu({ activeTab, onTabChange, onClose }: Props) {
  return (
    <div className="absolute left-0 right-0 top-11 z-[100] flex flex-col border-b border-border bg-surface">
      {navTabs.map((tab) => {
        const isActive = activeTab === tab.path;
        return (
          <button
            key={tab.path}
            type="button"
            onClick={() => {
              onTabChange(tab.path);
              onClose();
            }}
            className={cn(
              'cursor-pointer border-none border-b border-b-border px-5 py-[14px] text-left font-mono text-sm',
              isActive ? 'bg-card text-white' : 'bg-transparent text-muted',
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
