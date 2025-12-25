This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:ui` - Open Vitest UI
- `npm run test:coverage` - Run tests with coverage

## Commit Message Conventions

This project uses [semantic-release](https://semantic-release.gitbook.io/) with the [Angular Commit Message Convention](https://www.conventionalcommits.org/) to automatically generate versions and releases based on commit messages.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

| Type | Release | Description | Example |
|------|---------|-------------|---------|
| `feat:` | Minor (1.0.0 → 1.1.0) | A new feature | `feat: add user profile page` |
| `fix:` | Patch (1.0.0 → 1.0.1) | A bug fix | `fix: resolve navigation issue` |
| `BREAKING CHANGE` | Major (1.0.0 → 2.0.0) | A breaking change | `feat!: redesign API` |
| `chore:` | None | Maintenance tasks | `chore: update dependencies` |
| `docs:` | None | Documentation changes | `docs: update README` |
| `style:` | None | Code style changes | `style: format code` |
| `refactor:` | None | Code refactoring | `refactor: reorganize file structure` |
| `test:` | None | Adding or updating tests | `test: add unit tests for utils` |
| `perf:` | Patch | Performance improvements | `perf: optimize image loading` |

### Examples

```bash
# Minor release (1.0.0 → 1.1.0)
feat: add user authentication
feat(auth): implement login functionality

# Patch release (1.0.0 → 1.0.1)
fix: resolve button click handler issue
fix(api): handle error responses correctly

# Major release (1.0.0 → 2.0.0) - BREAKING CHANGE
feat!: change API endpoint structure

BREAKING CHANGE: All API endpoints now use /v2 prefix

# No release
chore: update dependencies
docs: update README
test: add unit tests
```

### Important Notes

- Only commits on the `main` branch trigger releases
- Commit messages must follow the convention for semantic-release to work
- Use `BREAKING CHANGE:` in the body or footer for major version bumps
- Use `!` after the type (e.g., `feat!:`) for breaking changes
- Commits that don't match the convention won't trigger a release

## CI/CD Pipeline

### Automatic Deployments

- **Preview Deployments**: Automatically deployed to Vercel when code is pushed to the `develop` branch (after CI passes)
- **Production Releases**: Manually triggered from GitHub Actions UI after merging to `main` branch

### Workflow Steps

1. **CI Workflow** (runs on PRs and pushes to `develop`/`main`):
   - Lint code
   - Type check
   - Run tests
   - Build application
   - Deploy preview (on `develop` branch only)

2. **Release Workflow** (manual trigger on `main` branch):
   - Run full CI checks
   - Analyze commits with semantic-release
   - Create version tag
   - Update CHANGELOG.md and package.json
   - Create GitHub release
   - Deploy to Vercel production

### Running a Release

1. Go to GitHub Actions tab
2. Select "Release & Deploy Production" workflow
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
