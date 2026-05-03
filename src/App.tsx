import { useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import TopTabs from '@/components/layout/TopTabs';
import MobileMenu from '@/components/layout/MobileMenu';
import Sidebar from '@/components/layout/Sidebar';
import StatusBar from '@/components/layout/StatusBar';
import MobileFileSheet from '@/components/layout/MobileFileSheet';
import MobileFilesButton from '@/components/layout/MobileFilesButton';

import HelloView from '@/components/hello/HelloView';
import AboutMeView from '@/components/about-me/AboutMeView';
import ProjectsView from '@/components/projects/ProjectsView';
import HomeLabView from '@/components/home-lab/HomeLabView';
import ContactView from '@/components/contact/ContactView';

import { useFileTabs } from '@/hooks/useFileTabs';

const SIDEBAR_PATHS = ['/_about-me', '/_projects', '/_home-lab', '/_contact-me'];
const VALID_PATHS = ['/', ...SIDEBAR_PATHS];
const STORAGE_KEY = 'pf_path';

// Module-scope flag — lives for the page session, resets on hard refresh / new tab.
// Used so the localStorage redirect fires only once per page load, not every time
// the user navigates back to `/` (which would make the Hello tab unreachable).
let hasRedirectedOnLoad = false;

/**
 * On root path, if a saved path exists in localStorage and isn't `/`,
 * redirect to it — but only on the very first visit per page session.
 * Subsequent visits to `/` (e.g. clicking the `_hello` tab) render Hello directly.
 */
function RootRedirect() {
  if (hasRedirectedOnLoad) {
    return <HelloView />;
  }

  const saved =
    typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;

  hasRedirectedOnLoad = true;

  if (saved && saved !== '/' && VALID_PATHS.includes(saved)) {
    return <Navigate to={saved} replace />;
  }

  return <HelloView />;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Persist path to localStorage
  useEffect(() => {
    if (VALID_PATHS.includes(location.pathname)) {
      localStorage.setItem(STORAGE_KEY, location.pathname);
    }
  }, [location.pathname]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Per-view file tabs (each view manages its own tab list, same as prototype)
  const aboutFileTabs = useFileTabs();
  const projFileTabs = useFileTabs();
  const labFileTabs = useFileTabs();
  const contactFileTabs = useFileTabs();

  const activeTab = location.pathname; // e.g. "/_about-me"

  const handleTabChange = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleSidebarItemClick = (id: string, label: string, filename?: string) => {
    const fname = filename ?? label;
    if (activeTab === '/_about-me') aboutFileTabs.openTab(id, label, fname);
    else if (activeTab === '/_projects') projFileTabs.openTab(id, label, fname);
    else if (activeTab === '/_home-lab') labFileTabs.openTab(id, label, fname);
    else if (activeTab === '/_contact-me') contactFileTabs.openTab(id, label, fname);
  };

  const openSecondaryTabs =
    activeTab === '/_about-me'
      ? aboutFileTabs.tabs
      : activeTab === '/_projects'
        ? projFileTabs.tabs
        : activeTab === '/_home-lab'
          ? labFileTabs.tabs
          : activeTab === '/_contact-me'
            ? contactFileTabs.tabs
            : [];

  const hasSidebar = SIDEBAR_PATHS.includes(activeTab);

  return (
    <div className="flex h-full w-full items-center justify-center bg-bg p-[clamp(8px,2vw,48px)]">
      {/* Main IDE window */}
      <div className="relative flex h-full w-full max-w-[1600px] flex-col overflow-hidden rounded-lg border border-border bg-surface">
        {/* Top nav */}
        <TopTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuToggle={() => setMobileMenuOpen((o) => !o)}
        />

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <MobileMenu
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Body: sidebar + content */}
        <div className="relative flex min-h-0 flex-1 overflow-hidden">
          {/* Sidebar (desktop/tablet only) */}
          {hasSidebar && (
            <Sidebar
              activeTab={activeTab}
              onSidebarItemClick={handleSidebarItemClick}
              openSecondaryTabs={openSecondaryTabs}
            />
          )}

          {/* Content area */}
          <div
            key={activeTab}
            className="view-enter flex min-h-0 flex-1 flex-col overflow-hidden"
          >
            <Routes>
              <Route path="/" element={<RootRedirect />} />
              <Route
                path="/_about-me"
                element={<AboutMeView fileTabs={aboutFileTabs} />}
              />
              <Route
                path="/_home-lab"
                element={<HomeLabView fileTabs={labFileTabs} />}
              />
              <Route
                path="/_projects"
                element={<ProjectsView fileTabs={projFileTabs} />}
              />
              <Route
                path="/_contact-me"
                element={<ContactView fileTabs={contactFileTabs} />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>

        {/* Mobile files button — sits above StatusBar, hidden on desktop via CSS */}
        <MobileFilesButton
          activeTab={activeTab}
          openCount={openSecondaryTabs.length}
          onClick={() => setSheetOpen(true)}
        />

        {/* Status bar */}
        <StatusBar />
      </div>

      {/* Mobile file sheet — mounted at App level, above IDE window */}
      <MobileFileSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        activeTab={activeTab}
        onSidebarItemClick={handleSidebarItemClick}
        openSecondaryTabs={openSecondaryTabs}
      />
    </div>
  );
}
