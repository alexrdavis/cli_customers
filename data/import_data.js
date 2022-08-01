import {readFileSync, promises as fsPromises} from "fs";

export function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr); 

  return arr;
}


