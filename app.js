import inquirer from 'inquirer';
import { syncReadFile }  from "../cli_customers/data/import_data.js"

let filePath = "../cli_customers/data/customers.txt";

inquirer
  .prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is your first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is your last name?"
    }
  ])
  .then((answer) => {
    console.log(answer.first_name, answer.last_name);
    console.log(syncReadFile(filePath))
  });
