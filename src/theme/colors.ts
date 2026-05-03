/**
 * App color tokens. Mirror of `tailwind.config.ts` theme.extend.colors.
 * Use these in TS for inline tokens (e.g. SVG fills, syntax tuples) where
 * a Tailwind class isn't available. Otherwise prefer Tailwind utilities.
 */
export const C = {
  bg: '#010C15',
  surface: '#011627',
  card: '#010D1A',
  border: '#1E2D3D',
  muted: '#607B96',
  text: '#FFFFFF',
  green: '#43D9AD',
  orange: '#FEA55F',
  blue: '#4D5BCE',
  blueLight: '#5565E8',
  dim: '#011221',
} as const;

export type ColorToken = keyof typeof C;
