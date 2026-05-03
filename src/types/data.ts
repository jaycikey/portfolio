export interface SocialLinks {
  github: string;
  twitter: string;
  linkedin: string;
  website: string;
}

export interface Profile {
  name: string;
  displayName: string;
  role: string;
  github: string;
  githubHandle: string;
  website: string;
  email: string;
  location: string;
  bio: string;
  experience: ExperienceItem[];
  skills: Skills;
  contacts: Contacts;
  socials: SocialLinks;
  helloBylines: string[];
  openTo: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  tags: string[];
  desc: string;
}

export interface Skills {
  current: string[];
  learning: string[];
}

export interface Contacts {
  email: string;
  github: string;
  website: string;
  linkedin: string;
  twitter: string;
}

/** A code-bearing file rendered in the editor area (project / homelab / contact). */
export interface FileItem {
  name: string;
  filename: string;
  language: string;
  githubUrl: string | null;
  desc?: string;
  tags?: string[];
  stars?: number;
  lang?: string;
  icon?: string;
  codePreview: string | null;
}

export interface Project extends FileItem {
  desc: string;
  tags: string[];
}

export interface HomeLabItem extends FileItem {
  desc: string;
  tags: string[];
  icon: string;
}

export type CustomContentKey = 'ContactFormContent' | 'FindMeAlsoInContent';

export interface ContactFile {
  id: string;
  name: string;
  filename: string;
  language: string;
  githubUrl: string | null;
  codePreview: string | null;
  customContent: CustomContentKey | null;
}

export type CertStatus = 'done' | 'in-progress' | 'planned';

export interface Cert {
  id: string;
  name: string;
  issuer: string;
  status: CertStatus;
  target: string;
  note: string;
}

export interface Interest {
  icon: string;
  label: string;
  desc: string;
}

export interface EducationItem {
  period: string;
  title: string;
  place: string;
  desc: string;
}

export interface SnippetMeta {
  filename: string;
  githubUrl: string;
  byline: string;
  badges: string[];
}

export interface NavTab {
  path: string;
  label: string;
}

export interface AboutSectionItem {
  id: string;
  label: string;
  icon: string;
  githubIcon?: boolean;
  filename?: string;
}

export interface AboutSections {
  personal: AboutSectionItem[];
  certifications: AboutSectionItem[];
  contacts: AboutSectionItem[];
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  homeLab: HomeLabItem[];
  contactFiles: ContactFile[];
  certs: Cert[];
  interests: Interest[];
  education: EducationItem[];
  snippetMeta: SnippetMeta;
  aboutSections: AboutSections;
  navTabs: NavTab[];
}
