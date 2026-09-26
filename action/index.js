import { appendFileSync } from 'node:fs';
import { formatDemoMessage } from '../src/message.js';

const separatorInput = process.env.INPUT_SEPARATOR;
const separator =
  separatorInput === undefined || separatorInput === '' ? '\n' : separatorInput;
const message = formatDemoMessage(separator);

console.log(message);

const outputPath = process.env.GITHUB_OUTPUT;
if (outputPath) {
  appendFileSync(outputPath, `message<<EOF\n${message}\nEOF\n`);
}
