import { cn } from '@/lib/cn';
import { IconGithub } from '@/components/icons';
import { C } from '@/theme/colors';

interface Props {
  label: string;
  icon: string;
  active?: boolean;
  onClick: () => void;
  githubIcon?: boolean;
}

export default function SidebarItem({
  label,
  icon,
  active = false,
  onClick,
  githubIcon = false,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full cursor-pointer items-center gap-2 border-none bg-transparent py-[7px] pl-7 pr-3 text-left font-mono text-[13px] transition-colors duration-100',
        active
          ? 'bg-[rgba(96,123,150,0.12)] text-white'
          : 'text-muted hover:bg-[rgba(96,123,150,0.07)] hover:text-white',
      )}
    >
      {githubIcon ? (
        <IconGithub size={13} color={C.muted} />
      ) : (
        <span className="text-xs">{icon}</span>
      )}
      <span>{label}</span>
    </button>
  );
}
