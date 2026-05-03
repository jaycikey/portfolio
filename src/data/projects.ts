import type { Project } from '@/types/data';

export const projects: Project[] = [
  {
    name: '_jayck-dev',
    filename: 'App.tsx',
    language: 'typescript',
    githubUrl: 'https://github.com/jaycikey/portfolio',
    desc: 'This portfolio. VS Code-inspired single-page IDE. React 18 + TypeScript + Vite + Tailwind, deployed on Vercel. Mobile-first with bottom-sheet file explorer, secondary tabs with right-click context menu, per-view file-tab state.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    stars: 1,
    lang: 'TypeScript',
    codePreview: `// App.tsx — root component
import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import TopTabs from '@/components/layout/TopTabs';
import Sidebar from '@/components/layout/Sidebar';
import StatusBar from '@/components/layout/StatusBar';
import MobileFileSheet from '@/components/layout/MobileFileSheet';
import HelloView from '@/components/hello/HelloView';
import AboutMeView from '@/components/about-me/AboutMeView';
import HomeLabView from '@/components/home-lab/HomeLabView';
import ProjectsView from '@/components/projects/ProjectsView';
import ContactView from '@/components/contact/ContactView';
import { useFileTabs } from '@/hooks/useFileTabs';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.slice(1) || '_hello';

  // Per-view independent tab state
  const aboutTabs   = useFileTabs();
  const projTabs    = useFileTabs();
  const labTabs     = useFileTabs();
  const contactTabs = useFileTabs();

  const [sheetOpen, setSheetOpen] = useState(false);

  const tabsForView = {
    '_about-me':   aboutTabs,
    '_projects':   projTabs,
    '_home-lab':   labTabs,
    '_contact-me': contactTabs,
  }[activeTab];

  return (
    <div className="ide-shell">
      <TopTabs active={activeTab} onNavigate={t => navigate(\`/\${t}\`)} />
      <div className="ide-body">
        <Sidebar view={activeTab} fileTabs={tabsForView} />
        <Routes>
          <Route path="/_hello"      element={<HelloView />} />
          <Route path="/_about-me"   element={<AboutMeView fileTabs={aboutTabs} />} />
          <Route path="/_home-lab"   element={<HomeLabView fileTabs={labTabs} />} />
          <Route path="/_projects"   element={<ProjectsView fileTabs={projTabs} />} />
          <Route path="/_contact-me" element={<ContactView fileTabs={contactTabs} />} />
        </Routes>
      </div>
      <MobileFileSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
      <StatusBar onOpenFiles={() => setSheetOpen(true)} />
    </div>
  );
}`,
  },
];
