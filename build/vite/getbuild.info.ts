import { execSync } from 'child_process'

const gitCommand = 'git rev-parse --short HEAD'

export function getCurrentHash(): string {
  return execSync(gitCommand).toString().trim() ?? ''
}
