import type { Project } from '@/types/data';

export const projects: Project[] = [
  {
    name: '_jayck-flow',
    filename: 'jayck-flow.md',
    language: 'markdown',
    githubUrl: null,
    liveUrl: 'https://flow.jayck.dev',
    liveLabel: 'flow.jayck.dev',
    desc: "Founder and solo engineer. A money calendar for iPhone and iPad, live on the App Store under my LLC with paying subscribers — it carries the running balance forward across a calendar, so the tight day is visible weeks ahead. I built and run all of it: the React + Capacitor app, a Node.js/Express API in Docker on a Hetzner VPS behind Caddy and Cloudflare with the origin locked to Cloudflare's IP ranges, zero-knowledge encrypted sync, StoreKit subscriptions, and the domain's DNS and email authentication.",
    tags: ['React', 'TypeScript', 'Capacitor', 'Node.js', 'Docker', 'Caddy', 'Cloudflare', 'Hetzner'],
    lang: 'TypeScript',
    codePreview: `# JayCK Flow — money calendar

> See tomorrow's balance today.

Live on the App Store
iPhone and iPad · JAYCIKEY LLC
Founder and solo engineer

---

## what it does

Income, bills and plans go on the
day they actually happen. Each day
carries the running total forward,
so every square shows that day's
projected balance.

- green → on track
- red → balance goes below zero
- \`What if?\` → test a purchase
  first; every day after it
  re-colours

## request path

  iPhone / iPad
       │  HTTPS
       ▼
  Cloudflare ── proxy + DNS
       │  origin accepts only
       │  Cloudflare IPv4 / IPv6
       ▼
  Caddy ── reverse proxy
       ▼
  Node.js / Express ── Docker
       on a Hetzner VPS

## private by design

- works offline, no account to start
- no bank connection, no ads,
  no tracking
- zero-knowledge sync: encrypted
  on device (PBKDF2 + AES-256-GCM)
  before upload; the server stores
  only ciphertext

## release gate

- \`tsc --noEmit\` clean
- client + server tests green
- \`vite build\` succeeds
- then a real device — gates
  green is not done

## ops

- SPF · DKIM · DMARC p=quarantine
- secrets backed up off-box
- automated server backups`,
  },
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
  {
    name: '_wifi-heat-map',
    filename: 'collector.py',
    language: 'python',
    githubUrl: 'https://github.com/jaycikey',
    desc: 'Wireless signal-mapping tool. Raspberry Pi 5 collector samples RSSI across the space (with a Flipper Zero as an auxiliary capture source), a Python/Flask backend stores and serves the readings, and a React + Vite frontend renders the coverage heat map. End-to-end: hardware integration, REST API design, and the data-visualization layer.',
    tags: ['Python', 'Flask', 'React', 'Vite', 'Raspberry Pi', 'RF'],
    stars: 1,
    lang: 'Python',
    codePreview: `# collector.py — RSSI sampler on Raspberry Pi 5
# Walks the space, tags each reading with a grid
# coordinate, and POSTs to the Flask backend.

import subprocess, time, requests

API = "http://pi5.local:5000/api/readings"

def scan_rssi(iface="wlan1"):
    """Parse signal level per BSSID from iw scan."""
    out = subprocess.check_output(
        ["iw", "dev", iface, "scan"], text=True,
    )
    readings = {}
    bssid = None
    for line in out.splitlines():
        line = line.strip()
        if line.startswith("BSS "):
            bssid = line.split()[1].rstrip("(")
        elif line.startswith("signal:") and bssid:
            dbm = float(line.split()[1])
            readings[bssid] = dbm
    return readings

def sample_point(x, y, iface="wlan1"):
    """Capture one grid point and ship it to the API."""
    payload = {
        "x": x, "y": y,
        "ts": time.time(),
        "rssi": scan_rssi(iface),
    }
    requests.post(API, json=payload, timeout=5)
    return payload

# Workflow:
#   1. Define a grid over the floor plan
#   2. Walk each point, run sample_point(x, y)
#   3. Flask aggregates -> React renders heat map`,
  },
];
