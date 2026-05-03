import { cn } from '@/lib/cn';
import { profile } from '@/data';
import { desktopTabs, navTabs } from '@/data/tabs';

interface Props {
  activeTab: string;
  onTabChange: (path: string) => void;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

const CONTACT_TAB = navTabs.find((t) => t.path === '/_contact-me');

export default function TopTabs({
  activeTab,
  onTabChange,
  onMobileMenuToggle,
}: Props) {
  return (
    <header className="relative flex h-11 shrink-0 items-stretch justify-between border-b border-border">
      {/* Brand name */}
      <div className="flex min-w-0 items-center whitespace-nowrap border-r border-border px-4 font-mono text-sm text-muted">
        {profile.name}
      </div>

      {/* Desktop tabs */}
      <nav className="desktop-tabs flex flex-1 items-stretch">
        {desktopTabs.map((tab) => {
          const isActive = activeTab === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => onTabChange(tab.path)}
              className={cn(
                'cursor-pointer whitespace-nowrap border-r border-border bg-transparent px-5 font-mono text-sm transition-colors',
                isActive
                  ? '-mb-px border-b-2 border-b-accent text-white'
                  : 'border-b-2 border-b-transparent text-muted hover:text-white',
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Contact tab far right (desktop only) */}
      {CONTACT_TAB && (
        <div
          className={cn(
            'contact-right flex cursor-pointer items-center whitespace-nowrap border-l border-border px-5 font-mono text-sm transition-colors',
            activeTab === CONTACT_TAB.path
              ? 'text-white'
              : 'text-muted hover:text-white',
          )}
          onClick={() => onTabChange(CONTACT_TAB.path)}
        >
          {CONTACT_TAB.label}
        </div>
      )}

      {/* Mobile hamburger */}
      <button
        type="button"
        className="mobile-menu-btn hidden cursor-pointer items-center border-none bg-transparent px-4 text-muted"
        onClick={onMobileMenuToggle}
        aria-label="Toggle menu"
      >
        <svg width={18} height={16} viewBox="0 0 18 16" fill="currentColor">
          <path d="M0 0h18v2H0zM0 7h18v2H0zM0 14h18v2H0z" />
        </svg>
      </button>
    </header>
  );
}
