import { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import type { Tab } from '@/types/tabs';

interface Props {
  open: boolean;
  onClose: () => void;
  activeTab: string;
  onSidebarItemClick: (id: string, label: string, filename?: string) => void;
  openSecondaryTabs: Tab[];
}

export default function MobileFileSheet({
  open,
  onClose,
  activeTab,
  onSidebarItemClick,
  openSecondaryTabs,
}: Props) {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const touchRef = useRef({ startY: 0, dragging: false });

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Esc key closes
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Swipe-down to close
  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    touchRef.current = { startY: t.clientY, dragging: true };
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchRef.current.dragging) return;
    const t = e.touches[0];
    if (!t) return;
    const dy = t.clientY - touchRef.current.startY;
    if (dy > 0 && sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${dy}px)`;
    }
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    const dy = t ? t.clientY - touchRef.current.startY : 0;
    touchRef.current.dragging = false;
    if (sheetRef.current) sheetRef.current.style.transform = '';
    if (dy > 40) onClose();
  };

  // Intercept sidebar item clicks → close sheet after firing
  const handleItemClick = (id: string, label: string, filename?: string) => {
    onSidebarItemClick(id, label, filename);
    // Small delay so the tab state updates before sheet animates out
    window.setTimeout(onClose, 80);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[89] bg-black/50 transition-opacity duration-200 ease-out"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className="fixed bottom-0 left-0 right-0 z-[90] flex flex-col overflow-hidden rounded-t-xl border-t border-border bg-surface transition-transform duration-200 ease-out will-change-transform"
        style={{
          height: '70dvh',
          transform: open ? 'translateY(0)' : 'translateY(100%)',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag handle */}
        <div className="flex shrink-0 justify-center px-0 pb-1.5 pt-2.5">
          <div className="h-1 w-9 rounded bg-muted opacity-40" />
        </div>

        {/* Sheet label */}
        <div className="shrink-0 border-b border-border px-4 pb-2.5 pt-1 font-mono text-xs text-muted">
          {activeTab} / files
        </div>

        {/* Sidebar content — full width */}
        <div className="flex-1 overflow-y-auto">
          <Sidebar
            activeTab={activeTab}
            onSidebarItemClick={handleItemClick}
            openSecondaryTabs={openSecondaryTabs}
            fullWidth
          />
        </div>
      </div>
    </>
  );
}
