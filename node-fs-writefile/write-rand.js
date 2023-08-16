import { writeFile } from 'node:fs/promises';

const random = Math.random();

async function writeToFile(path, data, options) {
  try {
    await writeFile(path, data, options);
    console.log('File written successfully');
  } catch (err) {
    console.err(err.message);
    process.exit(1);
  }
}
writeToFile('random.txt', random + '\n');
