import { readFile } from 'node:fs/promises';

async function read() {
  try {
    const content = await readFile('dijkstra.txt', 'utf8');
    console.log('File read successfully:', content);
  } catch (err) {
    console.log(err.message);
  }
}

read();
