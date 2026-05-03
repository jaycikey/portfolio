import { useCallback, useEffect, useState } from 'react';
import type { FileTabsApi, Tab } from '@/types/tabs';

/**
 * Per-view file-tab state. Each view (about-me / projects / home-lab /
 * contact) owns its own instance — same as the prototype.
 *
 * Keyboard shortcuts (active only when at least one tab is open):
 *   Cmd/Ctrl + K        → close active tab
 *   Cmd/Ctrl + Shift+K  → close all tabs
 * (W is intentionally avoided — browsers reserve it for closing the tab.)
 */
export function useFileTabs(): FileTabsApi {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [loadedIds, setLoadedIds] = useState<Set<string>>(new Set());

  const openTab = useCallback((id: string, label: string, filename: string) => {
    setTabs((prev) => {
      if (prev.some((t) => t.id === id)) {
        setActiveId(id);
        return prev;
      }
      setActiveId(id);
      return [...prev, { id, label, filename }];
    });
  }, []);

  const focusTab = useCallback((id: string) => setActiveId(id), []);

  const closeTab = useCallback((id: string) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.id !== id);
      setActiveId((cur) => {
        if (cur !== id) return cur;
        const last = next[next.length - 1];
        return last ? last.id : null;
      });
      return next;
    });
    setLoadedIds((prev) => {
      const s = new Set(prev);
      s.delete(id);
      return s;
    });
  }, []);

  const closeOthers = useCallback((id: string) => {
    setTabs((prev) => {
      const kept = prev.filter((t) => t.id === id);
      setActiveId(id);
      return kept;
    });
    setLoadedIds((prev) => {
      const s = new Set<string>();
      if (prev.has(id)) s.add(id);
      return s;
    });
  }, []);

  const closeAll = useCallback(() => {
    setTabs([]);
    setActiveId(null);
    setLoadedIds(new Set());
  }, []);

  const markLoaded = useCallback((id: string) => {
    setLoadedIds((prev) => new Set([...prev, id]));
  }, []);

  const isLoaded = useCallback((id: string) => loadedIds.has(id), [loadedIds]);

  // Cmd/Ctrl+K shortcuts — only active when this view has tabs.
  useEffect(() => {
    if (tabs.length === 0) return;
    const handler = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (!mod) return;
      if (e.key === 'K' && e.shiftKey) {
        e.preventDefault();
        closeAll();
      } else if (e.key === 'k' && !e.shiftKey) {
        e.preventDefault();
        setActiveId((cur) => {
          if (cur) closeTab(cur);
          return cur;
        });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [tabs.length, closeTab, closeAll]);

  return {
    tabs,
    activeId,
    openTab,
    focusTab,
    closeTab,
    closeOthers,
    closeAll,
    isLoaded,
    markLoaded,
  };
}
