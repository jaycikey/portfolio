import type { PortfolioData } from '@/types/data';

import { profile } from './profile';
import { projects } from './projects';
import { homeLab } from './home-lab';
import { contactFiles } from './contact-files';
import { certs } from './certs';
import { interests } from './interests';
import { education } from './education';
import { snippetMeta } from './snippet-meta';
import { aboutSections } from './about-sections';
import { navTabs } from './tabs';

export {
  profile,
  projects,
  homeLab,
  contactFiles,
  certs,
  interests,
  education,
  snippetMeta,
  aboutSections,
  navTabs,
};

export const portfolioData: PortfolioData = {
  profile,
  projects,
  homeLab,
  contactFiles,
  certs,
  interests,
  education,
  snippetMeta,
  aboutSections,
  navTabs,
};
