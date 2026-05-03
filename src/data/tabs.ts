import type { NavTab } from '@/types/data';

/** Top-level navigation. The same list drives `TopTabs` (desktop) and `MobileMenu`. */
export const navTabs: NavTab[] = [
  { path: '/', label: '_hello' },
  { path: '/_about-me', label: '_about-me' },
  { path: '/_home-lab', label: '_home-lab' },
  { path: '/_projects', label: '_projects' },
  { path: '/_contact-me', label: '_contact-me' },
];

/** Subset shown in the desktop top bar (excludes contact, which sits far-right). */
export const desktopTabs: NavTab[] = navTabs.filter(
  (t) => t.path !== '/_contact-me',
);
