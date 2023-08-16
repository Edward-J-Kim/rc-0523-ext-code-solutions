import { readFile } from 'node:fs/promises';

async function readAny() {
  try {
    const filePath = process.argv[2];
    const content = await readFile(filePath, 'utf8');
    console.log('File read successfully:', content);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}

readAny();
