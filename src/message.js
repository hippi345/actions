/** Lines echoed by the original demo workflow. */
const DEMO_MESSAGE_LINES = [
  'This demo file shows a',
  'very basic and easy-to-understand workflow.',
];

/**
 * @returns {string[]} Message lines in display order.
 */
export function getDemoMessageLines() {
  return [...DEMO_MESSAGE_LINES];
}

/**
 * @param {string} [separator='\n'] Join lines with this separator.
 * @returns {string}
 */
export function formatDemoMessage(separator = '\n') {
  return getDemoMessageLines().join(separator);
}
