import FileEditorArea from '@/components/editor/FileEditorArea';
import SecondaryTabs from '@/components/layout/SecondaryTabs';
import { projects } from '@/data';
import type { FileTabsApi } from '@/types/tabs';

interface Props {
  fileTabs: FileTabsApi;
}

export default function ProjectsView({ fileTabs }: Props) {
  const { tabs, activeId, focusTab, closeTab, isLoaded, markLoaded } = fileTabs;

  const activeItem = projects.find((p) => p.name === activeId);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <SecondaryTabs
        tabs={tabs}
        activeTabId={activeId}
        onTabClick={focusTab}
        onTabClose={closeTab}
        fileTabs={fileTabs}
      />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden">
          <FileEditorArea
            item={activeItem}
            tabId={activeId}
            isLoaded={activeId ? isLoaded(activeId) : false}
            onLoaded={markLoaded}
            itemType="project"
          />
        </div>
      </div>
    </div>
  );
}
