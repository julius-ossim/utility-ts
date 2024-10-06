// Dangerfile.js
import { message, danger, warn, fail } from 'danger';

// Warn if there are changes to package.json without changes to yarn.lock
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('yarn.lock');

if (packageChanged && !lockfileChanged) {
  warn('Changes were made to package.json, but not to yarn.lock');
}

// Ensure PRs have a description
if (danger.github.pr.body.length === 0) {
  fail('Please add a description to your PR.');
}

// Ensure PR title follows the conventional commit format
const prTitle = danger.github.pr.title;
const conventionalCommitRegex = /^(feat|fix|docs|style|refactor|test|chore|build|ci|perf|revert)(\(.+\))?: .{1,50}/;

if (!conventionalCommitRegex.test(prTitle)) {
  fail('PR title does not follow the conventional commit format.');
}

// Ensure PR description is at least 20 characters long
if (danger.github.pr.body.length < 20) {
  warn('PR description is too short. Please provide more details.');
}

// Ensure there are assigned reviewers
if (danger.github.requested_reviewers.users.length === 0) {
  warn('Please assign at least one reviewer to the PR.');
}

// Ensure there is a linked issue
const hasLinkedIssue = danger.github.pr.body.includes('Closes #');
if (!hasLinkedIssue) {
  warn('Please link an issue in the PR description (e.g., "Closes #123").');
}

// Ensure PR description contains an image or video link
const imageOrVideoRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|mp4|webm|mov|avi|mkv))/i;
if (!imageOrVideoRegex.test(danger.github.pr.body)) {
  warn('Please include an image or video link in the PR description.');
}