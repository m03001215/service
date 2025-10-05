# Release Guide

This project uses an automated release workflow that handles versioning, changelog updates, and git operations.

## How It Works

The release script automatically:

1. **Pre-release checks**:
   - Ensures you're on the `main` branch
   - Verifies working directory is clean
   - Pulls latest changes from remote

2. **Quality gates**:
   - Runs TypeScript type checking
   - Executes ESLint with strict rules (no warnings allowed)
   - Checks code formatting with Prettier
   - Builds the project to ensure it compiles

3. **Version management**:
   - Bumps version in `package.json` using semantic versioning
   - Automatically updates `CHANGELOG.md` with unreleased changes

4. **Git operations**:
   - Commits version changes
   - Creates and pushes git tags
   - Pushes changes to remote repository

5. **GitHub Actions automation**:
   - Automatically triggers when a new tag is pushed
   - Creates a GitHub release with changelog notes
   - Runs quality checks and builds the project

## Usage

### Basic Release Commands

```bash
# Patch release (1.0.0 → 1.0.1) - for bug fixes
npm run release:patch

# Minor release (1.0.0 → 1.1.0) - for new features
npm run release:minor

# Major release (1.0.0 → 2.0.0) - for breaking changes
npm run release:major

# Default release (patch)
npm run release
```

### Pre-release Workflow

Before creating a release, add your changes to the `CHANGELOG.md` under the `[Unreleased]` section:

```markdown
## [Unreleased]

### Added
- New feature X
- New component Y

### Changed
- Updated feature Z behavior

### Fixed
- Fixed bug in component A
```

The release script will automatically:
- Move these changes to a new version section
- Add the current date
- Reset the `[Unreleased]` section for future changes
- Push the tag to trigger GitHub Actions
- GitHub Actions will create the GitHub release automatically

### Release Types (Semantic Versioning)

- **Patch** (`1.0.0 → 1.0.1`): Bug fixes, small improvements
- **Minor** (`1.0.0 → 1.1.0`): New features, backwards compatible
- **Major** (`1.0.0 → 2.0.0`): Breaking changes

## Pre-commit Hooks

ESLint runs automatically on every commit to ensure code quality:

```bash
git add .
git commit -m "your message"
# ESLint and Prettier run automatically
```

If there are linting errors, the commit will be blocked until fixed.

## Manual Operations

If you need to run individual steps manually:

```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
npm run lint:strict

# Formatting
npm run format
npm run format:check

# Building
npm run build

# Update changelog manually
node scripts/update-changelog.js "v1.2.3"
```

## Troubleshooting

### Release fails with "Working directory not clean"
- Commit or stash your changes before releasing
- Use `git status` to see uncommitted changes

### Release fails with linting errors
- Fix the linting errors shown in the output
- Run `npm run lint:fix` to auto-fix some issues

### Release fails with type errors
- Fix TypeScript errors shown in the output
- Run `npm run type-check` to see all type issues

### Need to rollback a release
```bash
# If you haven't pushed yet
git reset --hard HEAD~1
git tag -d v1.0.1

# If you've already pushed
git revert HEAD
git push origin main
```