import type { Project } from '@/types/data';

export const projects: Project[] = [
  {
    name: '_jayck-dev',
    filename: 'App.tsx',
    language: 'typescript',
    githubUrl: 'https://github.com/jaycikey/portfolio/blob/main/src/App.tsx',
    desc: 'This portfolio. VS Code-inspired single-page IDE in React 18 + TypeScript + Tailwind + Vite. Per-view file-tab state via custom hook, mobile bottom-sheet with swipe-to-dismiss, right-click tab context menu, Cmd+K keyboard shortcuts, hand-tokenized syntax highlighting. Deploys to Vercel.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'React Router'],
    stars: 1,
    lang: 'TypeScript',
    codePreview: `// App.tsx — root component
// Per-view file-tab state, localStorage path persistence,
// and a one-shot redirect on first page load.

const SIDEBAR_PATHS = [
  '/_about-me', '/_projects', '/_home-lab', '/_contact-me',
];
const VALID_PATHS = ['/', ...SIDEBAR_PATHS];
const STORAGE_KEY = 'pf_path';

// Module-scope flag — lives for the page session, resets
// on hard refresh / new tab. Used so the localStorage
// redirect fires only ONCE per page load, not every time
// the user navigates back to '/' (which would otherwise
// make the Hello tab unreachable).
let hasRedirectedOnLoad = false;

function RootRedirect() {
  if (hasRedirectedOnLoad) {
    return <HelloView />;
  }
  const saved = typeof window !== 'undefined'
    ? localStorage.getItem(STORAGE_KEY)
    : null;
  hasRedirectedOnLoad = true;

  if (saved && saved !== '/' && VALID_PATHS.includes(saved)) {
    return <Navigate to={saved} replace />;
  }
  return <HelloView />;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Persist current path to localStorage
  useEffect(() => {
    if (VALID_PATHS.includes(location.pathname)) {
      localStorage.setItem(STORAGE_KEY, location.pathname);
    }
  }, [location.pathname]);

  // Each view manages its own tab list independently
  const aboutFileTabs   = useFileTabs();
  const projFileTabs    = useFileTabs();
  const labFileTabs     = useFileTabs();
  const contactFileTabs = useFileTabs();

  const activeTab = location.pathname;

  const handleSidebarItemClick = (
    id: string, label: string, filename?: string,
  ) => {
    const fname = filename ?? label;
    if (activeTab === '/_about-me')      aboutFileTabs.openTab(id, label, fname);
    else if (activeTab === '/_projects') projFileTabs.openTab(id, label, fname);
    else if (activeTab === '/_home-lab') labFileTabs.openTab(id, label, fname);
    else if (activeTab === '/_contact-me') contactFileTabs.openTab(id, label, fname);
  };

  return (
    <Routes>
      <Route path="/"             element={<RootRedirect />} />
      <Route path="/_about-me"    element={<AboutMeView fileTabs={aboutFileTabs} />} />
      <Route path="/_home-lab"    element={<HomeLabView fileTabs={labFileTabs} />} />
      <Route path="/_projects"    element={<ProjectsView fileTabs={projFileTabs} />} />
      <Route path="/_contact-me"  element={<ContactView fileTabs={contactFileTabs} />} />
      <Route path="*"             element={<Navigate to="/" replace />} />
    </Routes>
  );
}`,
  },
];
