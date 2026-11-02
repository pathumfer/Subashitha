# GitHub Actions Workflows

## CI Pipeline

The `ci.yml` workflow runs on every push and PR to verify builds and tests pass:

- TypeScript linting and tests
- Next.js build
- .NET build and xUnit tests
- Python ETL build and tests

All steps must pass before merging to main.

Expand this as the project grows to include:
- Deployment to staging/production
- Security scanning
- Performance benchmarks
- Nightly builds
