# Security Policy

## Supported versions

Security fixes are applied on the default branch. Use the latest commit on `main` for production workflows.

## Reporting a vulnerability

Please report security issues privately by opening a [GitHub Security Advisory](https://github.com/hippi345/actions/security/advisories/new) on this repository, or contact the maintainer through GitHub if advisories are unavailable.

Do not open public issues for undisclosed vulnerabilities.

## Secrets

- Never commit API keys, tokens, or connection strings.
- Use GitHub Actions secrets and repository environments for CI credentials.
- Rotate any credential that was ever committed to git history, even if later removed.
