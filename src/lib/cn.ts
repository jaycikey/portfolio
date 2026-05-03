/**
 * Tiny className joiner. Filters out falsy values so you can write:
 *   cn('base', isActive && 'active', condition ? 'a' : 'b')
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
