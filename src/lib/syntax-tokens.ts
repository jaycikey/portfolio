/**
 * Syntax highlighter color tokens. Used by `renderCodeLine` and by the
 * hand-tokenized SNIPPET_LINES tuples in `data/snippet.ts`.
 */
export const SH = {
  comment: '#607B96',
  keyword: '#4D5BCE',
  fn: '#43D9AD',
  string: '#E99287',
  var: '#43D9AD',
  prop: '#5565E8',
  punct: '#607B96',
  white: '#FFFFFF',
  orange: '#FEA55F',
  number: '#FEA55F',
} as const;

export type SHColor = (typeof SH)[keyof typeof SH];
