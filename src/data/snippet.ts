import { SH } from '@/lib/syntax-tokens';
import { C } from '@/theme/colors';

/**
 * Hand-tokenized lines for the hero `network-study-ai.js` snippet.
 * Each line is an array of `[text, color]` tuples. Pixel-tuned by hand —
 * do not regenerate with a real syntax highlighter.
 */
export type Token = readonly [string, string];
export type SnippetLine = readonly Token[];

export const SNIPPET_LINES: readonly SnippetLine[] = [
  // 0
  [['// network-study-ai.js', SH.comment]],
  // 1
  [['// Local Ollama → Claude API fallback with retry logic', SH.comment]],
  // 2 blank
  [['', C.muted]],
  // 3
  [
    ['async ', SH.keyword],
    ['function ', SH.keyword],
    ['askAI', SH.fn],
    ['(provider, system, user) {', SH.white],
  ],
  // 4
  [
    ['  ', C.muted],
    ['if ', SH.keyword],
    ['(provider', SH.white],
    ['.type', SH.prop],
    [' === ', SH.white],
    ['"ollama"', SH.string],
    [') {', SH.white],
  ],
  // 5
  [
    ['    ', C.muted],
    ['try ', SH.keyword],
    ['{', SH.white],
  ],
  // 6
  [
    ['      ', C.muted],
    ['return ', SH.keyword],
    ['await ', SH.keyword],
    ['callOllama', SH.fn],
    ['(system, user, provider', SH.white],
    ['.model', SH.prop],
    [');', SH.white],
  ],
  // 7
  [
    ['    } ', SH.white],
    ['catch ', SH.keyword],
    ['(err) {', SH.white],
  ],
  // 8
  [
    ['      console', SH.white],
    ['.warn', SH.prop],
    ['(', SH.white],
    ['"[StudyAI] Ollama failed →"', SH.string],
    [', err', SH.white],
    ['.message', SH.prop],
    [');', SH.white],
  ],
  // 9
  [
    ['      ', C.muted],
    ['new ', SH.keyword],
    ['Notice(', SH.white],
    ['"⚠️ Ollama down, falling back to Claude…"', SH.string],
    [', ', SH.white],
    ['2500', SH.orange],
    [');', SH.white],
  ],
  // 10
  [
    ['      ', C.muted],
    ['return ', SH.keyword],
    ['await ', SH.keyword],
    ['callClaude', SH.fn],
    ['(system, user, CONFIG', SH.white],
    ['.claude', SH.prop],
    ['.model', SH.prop],
    [');', SH.white],
  ],
  // 11
  [['    }', SH.white]],
  // 12
  [['  }', SH.white]],
  // 13
  [
    ['  ', C.muted],
    ['return ', SH.keyword],
    ['await ', SH.keyword],
    ['callClaude', SH.fn],
    ['(system, user, provider', SH.white],
    ['.model', SH.prop],
    [');', SH.white],
  ],
  // 14
  [['}', SH.white]],
  // 15 blank
  [['', C.muted]],
  // 16
  [
    ['async ', SH.keyword],
    ['function ', SH.keyword],
    ['callOllama', SH.fn],
    ['(system, user, model) {', SH.white],
  ],
  // 17
  [
    ['  ', C.muted],
    ['for ', SH.keyword],
    ['(', SH.white],
    ['let ', SH.keyword],
    ['attempt = ', SH.white],
    ['1', SH.orange],
    ['; attempt <= ', SH.white],
    ['2', SH.orange],
    ['; attempt++) {', SH.white],
  ],
  // 18
  [
    ['    ', C.muted],
    ['try ', SH.keyword],
    ['{', SH.white],
  ],
  // 19
  [
    ['      ', C.muted],
    ['const ', SH.keyword],
    ['r = ', SH.white],
    ['await ', SH.keyword],
    ['fetch(CONFIG', SH.white],
    ['.ollama', SH.prop],
    ['.url', SH.prop],
    [', {', SH.white],
  ],
  // 20
  [
    ['        method: ', SH.white],
    ['"POST"', SH.string],
    [',', SH.white],
  ],
  // 21
  [
    ['        signal: AbortSignal', SH.white],
    ['.timeout', SH.prop],
    ['(', SH.white],
    ['300000', SH.orange],
    ['),', SH.white],
  ],
  // 22
  [
    ['        body: JSON', SH.white],
    ['.stringify', SH.prop],
    ['({ model, system, prompt: user, stream: ', SH.white],
    ['false', SH.keyword],
    [' }),', SH.white],
  ],
  // 23
  [['      });', SH.white]],
  // 24
  [
    ['      ', C.muted],
    ['if ', SH.keyword],
    ['(!r', SH.white],
    ['.ok', SH.prop],
    [' && attempt === ', SH.white],
    ['1', SH.orange],
    [' && r', SH.white],
    ['.status', SH.prop],
    [' >= ', SH.white],
    ['500', SH.orange],
    [') {', SH.white],
  ],
  // 25
  [
    ['        ', C.muted],
    ['await ', SH.keyword],
    ['new ', SH.keyword],
    ['Promise(res => setTimeout(res, ', SH.white],
    ['2000', SH.orange],
    ['));', SH.white],
  ],
  // 26
  [['        continue;', SH.keyword]],
  // 27
  [['      }', SH.white]],
  // 28
  [
    ['      ', C.muted],
    ['return ', SH.keyword],
    ['(', SH.white],
    ['await ', SH.keyword],
    ['r', SH.white],
    ['.json()', SH.prop],
    [')', SH.white],
    ['.response', SH.prop],
    ['?.', SH.white],
    ['trim', SH.fn],
    ['() ?? ', SH.white],
    ['""', SH.string],
    [';', SH.white],
  ],
  // 29
  [
    ['    } ', SH.white],
    ['catch ', SH.keyword],
    ['(err) {', SH.white],
  ],
  // 30
  [
    ['      ', C.muted],
    ['if ', SH.keyword],
    ['(attempt === ', SH.white],
    ['2', SH.orange],
    [') ', SH.white],
    ['throw ', SH.keyword],
    ['err;', SH.white],
  ],
  // 31
  [
    ['      ', C.muted],
    ['await ', SH.keyword],
    ['new ', SH.keyword],
    ['Promise(res => setTimeout(res, ', SH.white],
    ['2000', SH.orange],
    ['));', SH.white],
  ],
  // 32
  [['    }', SH.white]],
  // 33
  [['  }', SH.white]],
  // 34
  [['}', SH.white]],
];
