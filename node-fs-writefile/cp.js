import { readFile, writeFile } from 'node:fs/promises';

const note = process.argv[2];
const copy = process.argv[3];

try {
  const text = await readFile(note, 'utf8');
  await writeFile(copy, text + '\n', 'utf8');
} catch (err) {
  console.log(err);
  process.exit(1);
}
