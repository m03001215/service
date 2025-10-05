#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function updateChangelog(newVersion) {
  const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');

  if (!fs.existsSync(changelogPath)) {
    // eslint-disable-next-line no-console
    console.log('⚠️  CHANGELOG.md not found, skipping update');
    return;
  }

  const content = fs.readFileSync(changelogPath, 'utf8');
  const currentDate = new Date().toISOString().split('T')[0];

  // Split content into lines
  const lines = content.split('\n');

  // Find the [Unreleased] section
  const unreleasedIndex = lines.findIndex(line =>
    line.includes('## [Unreleased]')
  );

  if (unreleasedIndex === -1) {
    // eslint-disable-next-line no-console
    console.log('⚠️  [Unreleased] section not found in CHANGELOG.md');
    return;
  }

  // Find the next version section or end of unreleased content
  let nextVersionIndex = lines.findIndex(
    (line, index) => index > unreleasedIndex && line.match(/^## \[[0-9]/)
  );

  if (nextVersionIndex === -1) {
    nextVersionIndex = lines.length;
  }

  // Extract unreleased content (excluding the [Unreleased] header)
  const unreleasedContent = lines.slice(unreleasedIndex + 1, nextVersionIndex);

  // Check if there's actual content in the unreleased section
  const hasContent = unreleasedContent.some(
    line =>
      line.trim() &&
      !line.match(/^### (Added|Changed|Deprecated|Removed|Fixed|Security)$/)
  );

  // Create new version section
  const newVersionSection = [
    `## [${newVersion}] - ${currentDate}`,
    ...unreleasedContent,
  ];

  // Create new unreleased section
  const newUnreleasedSection = [
    '## [Unreleased]',
    '',
    '### Added',
    '',
    '### Changed',
    '',
    '### Deprecated',
    '',
    '### Removed',
    '',
    '### Fixed',
    '',
    '### Security',
    '',
  ];

  // Rebuild the changelog
  const newLines = [
    ...lines.slice(0, unreleasedIndex),
    ...newUnreleasedSection,
    ...newVersionSection,
    ...lines.slice(nextVersionIndex),
  ];

  // Write back to file
  fs.writeFileSync(changelogPath, newLines.join('\n'));

  if (hasContent) {
    // eslint-disable-next-line no-console
    console.log(`✅ CHANGELOG.md updated with version ${newVersion}`);
  } else {
    // eslint-disable-next-line no-console
    console.log(
      `✅ CHANGELOG.md updated with version ${newVersion} (no unreleased changes found)`
    );
  }
}

// Get version from command line argument
const newVersion = process.argv[2];
if (!newVersion) {
  // eslint-disable-next-line no-console
  console.error('❌ Error: Version argument required');
  process.exit(1);
}

updateChangelog(newVersion);
