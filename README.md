# actions

[![CI](https://github.com/hippi345/actions/actions/workflows/ci.yml/badge.svg)](https://github.com/hippi345/actions/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A minimal, tested GitHub Actions demo repository. It preserves the original “hello world” workflow behavior—printing a short multi-line message—while adding a reusable local action, Node.js tooling, and automated CI.

## Features

- **Classic demo message** — Same two-line output as the original workflow, now implemented in tested JavaScript.
- **Local composite action** — Use `./action` in your workflows to emit the message and expose it as a step output.
- **Offline unit tests** — Vitest suite with no network or credentials required.
- **Lint and format** — ESLint 9 and Prettier with configs checked in CI.
- **Dependabot** — Weekly updates for npm and GitHub Actions.

## Requirements

- [Node.js](https://nodejs.org/) **22** or newer (LTS)
- npm 10+

## Setup

```bash
git clone https://github.com/hippi345/actions.git
cd actions
npm ci
```

## Configuration

No secrets are required for development, tests, or the included CI jobs.

Optional environment files are documented in [`.env.example`](.env.example). Copy to `.env` only if you add custom configuration later.

## Usage

### Run the demo message locally

```bash
node --input-type=module -e "import { formatDemoMessage } from './src/message.js'; console.log(formatDemoMessage());"
```

### Use as a library

```javascript
import { formatDemoMessage, getDemoMessageLines } from './src/index.js';

console.log(getDemoMessageLines());
console.log(formatDemoMessage(' | '));
```

### Use the GitHub Action in a workflow

```yaml
jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ./action
        id: demo
      - run: echo "${{ steps.demo.outputs.message }}"
```

Optional input `separator` (default: newline) controls how lines are joined.

## Development

| Command              | Description                |
| -------------------- | -------------------------- |
| `npm test`           | Run unit tests (Vitest)    |
| `npm run lint`       | ESLint                     |
| `npm run format`     | Check Prettier formatting  |
| `npm run format:fix` | Apply Prettier             |
| `npm run build`      | Syntax-check entry modules |

## Project structure

```
.
├── action/           # Local GitHub Action (action.yml + runner entry)
├── src/              # Message helpers
├── test/             # Unit tests
├── .github/
│   ├── workflows/    # CI pipeline
│   └── dependabot.yml
├── SECURITY.md
└── LICENSE
```

## License

MIT © 2026 Joel Shearon — see [LICENSE](LICENSE).
