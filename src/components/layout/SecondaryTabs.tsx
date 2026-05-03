import { useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { IconClose, IconFile } from '@/components/icons';
import { C } from '@/theme/colors';
import TabContextMenu from './TabContextMenu';
import type { FileTabsApi, Tab } from '@/types/tabs';

interface Props {
  tabs: Tab[];
  activeTabId: string | null;
  onTabClick: (id: string) => void;
  onTabClose: (id: string) => void;
  fileTabs: FileTabsApi;
}

export default function SecondaryTabs({
  tabs,
  activeTabId,
  onTabClick,
  onTabClose,
  fileTabs,
}: Props) {
  const [menu, setMenu] = useState<{ x: number; y: number; tab: Tab } | null>(
    null,
  );

  // Bug 3 fix: long-press fired flag to suppress synthetic click
  const longPressFiredRef = useRef(false);
  const longPressTimerRef = useRef<number | null>(null);

  const openMenu = (e: React.MouseEvent, tab: Tab) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY, tab });
  };

  const startLongPress = (e: React.TouchEvent, tab: Tab) => {
    longPressFiredRef.current = false;
    const touch = e.touches[0];
    if (!touch) return;
    const tx = touch.clientX;
    const ty = touch.clientY;
    longPressTimerRef.current = window.setTimeout(() => {
      longPressFiredRef.current = true;
      setMenu({ x: tx, y: ty, tab });
    }, 500);
  };

  const cancelLongPress = () => {
    if (longPressTimerRef.current !== null) {
      window.clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  if (!tabs || tabs.length === 0) return null;

  return (
    <>
      <div className="sec-tabs-bar flex h-9 shrink-0 items-stretch overflow-x-auto border-b border-border">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              key={tab.id}
              className={cn(
                'sec-tab-item -mb-px flex shrink-0 cursor-pointer select-none items-center gap-2 whitespace-nowrap border-r border-border px-4 font-mono text-[13px] transition-colors duration-100',
                isActive
                  ? 'border-b border-b-accent bg-[rgba(255,255,255,0.03)] text-white'
                  : 'border-b border-b-transparent text-muted hover:text-white',
              )}
              onClick={() => {
                if (longPressFiredRef.current) {
                  longPressFiredRef.current = false;
                  return;
                }
                onTabClick(tab.id);
              }}
              onContextMenu={(e) => openMenu(e, tab)}
              onTouchStart={(e) => startLongPress(e, tab)}
              onTouchEnd={cancelLongPress}
              onTouchMove={cancelLongPress}
            >
              <IconFile color={isActive ? C.text : C.muted} size={12} />
              <span className="sec-tab-label">{tab.label}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
                className="ml-0.5 flex cursor-pointer items-center border-none bg-transparent p-0.5 opacity-60 hover:opacity-100"
                title="Close tab"
              >
                <IconClose size={9} color={isActive ? C.text : C.muted} />
              </button>
            </div>
          );
        })}
      </div>

      {menu && (
        <TabContextMenu
          x={menu.x}
          y={menu.y}
          tab={menu.tab}
          tabs={tabs}
          fileTabs={fileTabs}
          onClose={() => setMenu(null)}
        />
      )}
    </>
  );
}
