import {readFileSync, promises as fsPromises} from "fs";

export function importCustomers(filename) {
  const contents = readFileSync(filename, "utf-8");

  let arr = contents.split(/\r?\n/); 
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
      try {
          const obj = JSON.parse(arr[i])
          newArray.push(obj)
      } catch (err) {
          err
      }
  }

  return newArray;
}


