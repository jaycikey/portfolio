import { C } from '@/theme/colors';

interface Props {
  size?: number;
  color?: string;
}

export default function IconClose({ size = 10, color = C.muted }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <path
        d="M2 2l6 6M8 2l-6 6"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
