import inquirer from 'inquirer';
import { readAllCustomers, readCustomerById } from "../cli_customers/operations/read.js"

inquirer
  .prompt([
    {
      name: "operation",
      type: "list",
      message: "Would you like to Create, Read, Update or Delete?",
      choices: [
        "Create",
        "Read",
        "Read All",
        "Update",
        "Delete"
      ]
    }
  ])
  .then((answer) => {
    // if read operation, return read by id
    if(answer.operation == "Read") {
      console.log(readCustomerById(1))
    // if read all operation, return all customers
    } else if(answer.operation == "Read All") {
      readAllCustomers()
    }
  });
