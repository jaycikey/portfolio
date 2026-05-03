import { useState } from 'react';
import { cn } from '@/lib/cn';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import { projects, homeLab, contactFiles, aboutSections } from '@/data';
import { C } from '@/theme/colors';
import type { Tab } from '@/types/tabs';

interface Props {
  activeTab: string;
  onSidebarItemClick: (id: string, label: string, filename?: string) => void;
  openSecondaryTabs: Tab[];
  fullWidth?: boolean;
}

interface ExpandedState {
  'personal-info': boolean;
  contacts: boolean;
  projects: boolean;
  certifications: boolean;
}

export default function Sidebar({
  activeTab,
  onSidebarItemClick,
  openSecondaryTabs,
  fullWidth = false,
}: Props) {
  const [expanded, setExpanded] = useState<ExpandedState>({
    'personal-info': true,
    contacts: true,
    projects: true,
    certifications: true,
  });

  const toggle = (key: keyof ExpandedState) =>
    setExpanded((e) => ({ ...e, [key]: !e[key] }));
  const isOpen = (key: string) =>
    openSecondaryTabs.some((t) => t.id === key);

  const className = cn(
    'shrink-0 overflow-y-auto font-mono text-sm',
    fullWidth ? 'sidebar sidebar--mobile w-full' : 'sidebar w-[220px] border-r border-border',
  );

  // ── About-me sidebar ────────────────────────────────────────────
  if (activeTab === '/_about-me') {
    return (
      <aside className={className}>
        <SidebarSection
          label="personal-info"
          open={expanded['personal-info']}
          onToggle={() => toggle('personal-info')}
          iconColor={C.orange}
        >
          {aboutSections.personal.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              active={isOpen(item.id)}
              onClick={() => onSidebarItemClick(item.id, item.label)}
            />
          ))}
        </SidebarSection>

        <SidebarSection
          label="certifications"
          open={expanded.certifications}
          onToggle={() => toggle('certifications')}
          iconColor={C.blue}
        >
          {aboutSections.certifications.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              active={isOpen(item.id)}
              onClick={() =>
                onSidebarItemClick(item.id, item.label, item.filename)
              }
            />
          ))}
        </SidebarSection>

        <SidebarSection
          label="contacts"
          open={expanded.contacts}
          onToggle={() => toggle('contacts')}
          iconColor={C.green}
        >
          {aboutSections.contacts.map((item) => (
            <SidebarItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              githubIcon={item.githubIcon}
              active={isOpen(item.id)}
              onClick={() => onSidebarItemClick(item.id, item.label)}
            />
          ))}
        </SidebarSection>
      </aside>
    );
  }

  // ── Projects sidebar ────────────────────────────────────────────
  if (activeTab === '/_projects') {
    return (
      <aside className={className}>
        <SidebarSection
          label="projects"
          open={expanded.projects}
          onToggle={() => toggle('projects')}
          iconColor={C.blue}
        >
          {projects.map((p) => (
            <SidebarItem
              key={p.name}
              label={p.filename || p.name}
              icon="📄"
              active={isOpen(p.name)}
              onClick={() => onSidebarItemClick(p.name, p.filename || p.name, p.filename)}
            />
          ))}
        </SidebarSection>
      </aside>
    );
  }

  // ── Home-lab sidebar ────────────────────────────────────────────
  if (activeTab === '/_home-lab') {
    return (
      <aside className={className}>
        <SidebarSection
          label="home-lab"
          open={expanded.projects}
          onToggle={() => toggle('projects')}
          iconColor={C.green}
        >
          {homeLab.map((item) => {
            const id = item.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <SidebarItem
                key={id}
                label={item.filename || id}
                icon="📄"
                active={isOpen(id)}
                onClick={() => onSidebarItemClick(id, item.filename || id, item.filename)}
              />
            );
          })}
        </SidebarSection>
      </aside>
    );
  }

  // ── Contact sidebar ────────────────────────────────────────────
  if (activeTab === '/_contact-me') {
    return (
      <aside className={className}>
        <SidebarSection
          label="contacts"
          open={expanded.contacts}
          onToggle={() => toggle('contacts')}
          iconColor={C.green}
        >
          {contactFiles.map((file) => (
            <SidebarItem
              key={file.id}
              label={file.filename}
              icon="📄"
              active={isOpen(file.id)}
              onClick={() => onSidebarItemClick(file.id, file.filename, file.filename)}
            />
          ))}
        </SidebarSection>
      </aside>
    );
  }

  return null;
}
