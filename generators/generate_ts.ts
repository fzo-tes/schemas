import { writeFileSync } from 'fs'
import { compileFromFile } from 'json-schema-to-typescript'

async function generate() {
  writeFileSync(
    '.out/typescript/action.d.ts',
    await compileFromFile('action.json', { cwd: 'schemas' }))
}

generate()
