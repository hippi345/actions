import { describe, expect, it } from 'vitest';
import { formatDemoMessage, getDemoMessageLines } from '../src/message.js';

describe('getDemoMessageLines', () => {
  it('returns the classic demo lines', () => {
    expect(getDemoMessageLines()).toEqual([
      'This demo file shows a',
      'very basic and easy-to-understand workflow.',
    ]);
  });

  it('returns a copy so callers cannot mutate internal state', () => {
    const lines = getDemoMessageLines();
    lines.push('extra');
    expect(getDemoMessageLines()).toHaveLength(2);
  });
});

describe('formatDemoMessage', () => {
  it('joins lines with newline by default', () => {
    expect(formatDemoMessage()).toBe(
      'This demo file shows a\nvery basic and easy-to-understand workflow.',
    );
  });

  it('joins lines with a custom separator', () => {
    expect(formatDemoMessage(' | ')).toBe(
      'This demo file shows a | very basic and easy-to-understand workflow.',
    );
  });
});
