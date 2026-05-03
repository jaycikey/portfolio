import { C } from '@/theme/colors';

interface Props {
  open: boolean;
  color?: string;
  size?: number;
}

export default function IconChevron({ open, color = C.muted, size = 10 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      className="shrink-0 transition-transform duration-150"
      style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
    >
      <path
        d="M3 2l4 3-4 3"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
