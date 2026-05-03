import { C } from '@/theme/colors';

interface Props {
  color?: string;
  size?: number;
}

export default function IconFolder({ color = C.orange, size = 14 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M1 3.5A1.5 1.5 0 012.5 2H6l2 2h5.5A1.5 1.5 0 0115 5.5v7A1.5 1.5 0 0113.5 14h-11A1.5 1.5 0 011 12.5v-9z"
        fill={color}
        fillOpacity="0.85"
      />
    </svg>
  );
}
