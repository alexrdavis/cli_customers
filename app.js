import inquirer from 'inquirer';
import { readAllCustomers, readCustomerById } from "../cli_customers/operations/read.js"
import { deleteCustomer } from "../cli_customers/operations/delete.js"

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
      // new prompt to get ID for customer 
      inquirer.prompt([{name: "getId", type: "input", message:"Enter customer ID"}])
      .then(response => {console.log(readCustomerById(response.getId))})
    // if read all operation, return all customers
    } else if(answer.operation == "Read All") {
      readAllCustomers()
    } else if(answer.operation == "Delete") {
      // new prompt to get ID for customer to remove
      inquirer.prompt([{name: "getId", type: "input", message:"Enter customer ID"}])
      .then(response => {console.log(deleteCustomer(response.getId))})
    }
  });
