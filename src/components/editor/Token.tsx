import type { ReactNode } from 'react';

interface Props {
  color: string;
  children: ReactNode;
}

export default function Token({ color, children }: Props) {
  return <span style={{ color }}>{children}</span>;
}
