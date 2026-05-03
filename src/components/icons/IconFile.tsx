import { C } from '@/theme/colors';

interface Props {
  color?: string;
  size?: number;
}

export default function IconFile({ color = C.muted, size = 14 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M4 1h5.5L13 4.5V15H4V1z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M9 1v4h4" stroke={color} strokeWidth="1.2" fill="none" />
    </svg>
  );
}
