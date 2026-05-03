import EmptyFileState from '@/components/layout/EmptyFileState';
import LineNumbers from '@/components/layout/LineNumbers';
import SecondaryTabs from '@/components/layout/SecondaryTabs';
import BioContent from './BioContent';
import InterestsContent from './InterestsContent';
import EducationContent from './EducationContent';
import EmailContent from './EmailContent';
import GithubContent from './GithubContent';
import CertRoadmapContent from './CertRoadmapContent';
import type { FileTabsApi } from '@/types/tabs';

interface Props {
  fileTabs: FileTabsApi;
}

export default function AboutMeView({ fileTabs }: Props) {
  const { tabs, activeId, focusTab, closeTab } = fileTabs;

  const renderContent = () => {
    if (!activeId || tabs.length === 0) {
      return (
        <div className="flex flex-1 items-center justify-center">
          <EmptyFileState />
        </div>
      );
    }
    switch (activeId) {
      case 'bio':
        return <BioContent />;
      case 'interests':
        return <InterestsContent />;
      case 'education':
        return <EducationContent />;
      case 'email':
        return <EmailContent />;
      case 'github':
        return <GithubContent />;
      case 'cert-roadmap':
        return <CertRoadmapContent />;
      default:
        return null;
    }
  };

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
        <LineNumbers count={35} />
        <div className="flex-1 overflow-y-auto px-6 py-4">{renderContent()}</div>
      </div>
    </div>
  );
}
