/* eslint-disable react-refresh/only-export-components */
import type { ReactElement } from 'react';
import { C } from '@/theme/colors';
import { SH } from './syntax-tokens';

interface Rule {
  re: RegExp;
  color: string;
}

const RULES: Record<string, Rule[]> = {
  python: [
    { re: /(#.*)$/, color: SH.comment },
    {
      re: /\b(def|class|import|from|return|if|else|elif|for|while|with|as|try|except|pass|break|continue|not|and|or|in|is|None|True|False|lambda|yield|async|await|raise|del|global|nonlocal)\b/,
      color: SH.keyword,
    },
    {
      re: /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|"""[\s\S]*?"""|'''[\s\S]*?''')/,
      color: SH.string,
    },
    { re: /\b(\d+\.?\d*)\b/, color: SH.number },
  ],
  yaml: [
    { re: /^(\s*#.*)$/, color: SH.comment },
    { re: /^(\s*[\w-]+):/, color: SH.keyword },
    { re: /:\s*("[^"]*"|'[^']*')/, color: SH.string },
    { re: /:\s*(\d+\.?\d*)/, color: SH.number },
    { re: /^(\s*-\s+)/, color: SH.fn },
  ],
  bash: [
    { re: /(#.*)$/, color: SH.comment },
    {
      re: /\b(if|then|else|fi|for|while|do|done|case|esac|function|return|export|local|echo|exit|set|read|shift|source)\b/,
      color: SH.keyword,
    },
    { re: /("(?:[^"\\]|\\.)*"|'[^']*')/, color: SH.string },
    { re: /\$\{?[\w]+\}?/, color: SH.var },
  ],
  typescript: [
    { re: /(\/\/.*)$/, color: SH.comment },
    {
      re: /\b(import|export|from|default|const|let|var|type|interface|function|return|if|else|switch|case|break|class|extends|async|await|new|typeof|as|in)\b/,
      color: SH.keyword,
    },
    {
      re: /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)/,
      color: SH.string,
    },
    { re: /\b(\d+\.?\d*)\b/, color: SH.number },
  ],
  ini: [
    { re: /(;.*|#.*)$/, color: SH.comment },
    { re: /^\[([^\]]+)\]$/, color: SH.keyword },
    { re: /^(\s*[\w.-]+)\s*=/, color: SH.fn },
    { re: /=\s*(.+)$/, color: SH.string },
  ],
  routeros: [
    { re: /(#.*)$/, color: SH.comment },
    { re: /^\/[\w\s-]+/, color: SH.keyword },
    { re: /\b(add|set|remove|print|export|comment)\b/, color: SH.fn },
    { re: /=("[^"]*"|[\w./:@-]+)/, color: SH.string },
  ],
  duckyscript: [
    { re: /^(REM .*)$/, color: SH.comment },
    {
      re: /^(DELAY|STRING|ENTER|CTRL|ALT|GUI|SHIFT|TAB|ESC|BACKSPACE|DELETE|INSERT|HOME|END|PAGEUP|PAGEDOWN|UP|DOWN|LEFT|RIGHT|CAPSLOCK|F\d+)/,
      color: SH.keyword,
    },
  ],
  json: [
    { re: /("(?:[^"\\]|\\.)*")\s*:/, color: SH.prop },
    { re: /:\s*("(?:[^"\\]|\\.)*")/, color: SH.string },
    { re: /\b(true|false|null)\b/, color: SH.keyword },
    { re: /\b(\d+\.?\d*)\b/, color: SH.number },
  ],
  markdown: [
    { re: /^(#{1,6}\s.*)$/, color: SH.fn },
    { re: /^(---|\*\*\*|___)$/, color: SH.comment },
    { re: /^(\s*[-*+]\s)/, color: SH.orange },
    { re: /^(>\s.*)$/, color: SH.comment },
    { re: /(`[^`]+`)/, color: SH.string },
  ],
};

/**
 * Render a single line of code with lightweight per-language coloring.
 * Behavior preserved exactly from the prototype: first matching rule
 * wins; the rest of the line is rendered muted.
 */
export function renderCodeLine(line: string, lang: string): ReactElement {
  if (!line) return <span>&nbsp;</span>;

  const langRules = RULES[lang] ?? RULES.bash;
  if (!langRules) return <span style={{ color: C.muted }}>{line}</span>;

  for (const { re, color } of langRules) {
    if (re.test(line)) {
      const m = line.match(re);
      if (m && m[0]) {
        const idx = line.indexOf(m[0]);
        const before = line.slice(0, idx);
        const match = m[0];
        const after = line.slice(idx + match.length);
        return (
          <span>
            <span style={{ color: SH.comment }}>{before}</span>
            <span style={{ color }}>{match}</span>
            <span style={{ color: C.muted }}>{after}</span>
          </span>
        );
      }
    }
  }
  return <span style={{ color: C.muted }}>{line}</span>;
}
