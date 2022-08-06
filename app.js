import inquirer from 'inquirer';
import { readAllCustomers, readCustomerById, readCustomerByUsername } from "../cli_customers/operations/read.js"
import { deleteCustomer } from "../cli_customers/operations/delete.js"
import { createCustomer, highestId } from "../cli_customers/operations/create.js"
import { updateCustomer } from "../cli_customers/operations/update.js"

inquirer
  .prompt([
    {
      name: "operation",
      type: "list",
      message: "Would you like to Create, Read, Update or Delete?",
      choices: [
        "Create",
        "Read By ID",
        "Read By Username",
        "Read All",
        "Update",
        "Delete"
      ]
    }
  ])
  .then((answer) => {
    switch(answer.operation) {
        case "Read By ID":
            inquirer.prompt([{name: "getId", type: "input", message:"Enter customer ID"}])
            .then(response => {console.log(readCustomerById(response.getId))})
            break;
        case "Read By Username":
            inquirer.prompt([{name: "getUsername", type: "input", message:"Enter customer username"}])
            .then(response => {console.log(readCustomerByUsername(response.getUsername))})
            break;
        case "Read All":
            readAllCustomers()
            break;
        case "Delete": 
            inquirer.prompt([{name: "getId", type: "input", message:"Enter customer ID"}])
            .then(response => {console.log(deleteCustomer(response.getId))})
            break;
        case "Create":
            inquirer.prompt([
                {name: "getUsername", type: "input", message:"Enter username:"}, 
                {name: "getName", type: "input", message:"Enter name: "}, 
                {name:"getEmail", type:"input", message:"Enter email: "}])
            .then(response => {
                // customer object to add
                let customer = {
                  "username": response.getUsername,
                  "name":  response.getName,
                  "email": response.getEmail,
                  "id": highestId()
                }
                console.log(createCustomer(customer))
            })
            break;
        case "Update":
            inquirer.prompt([{name: "getId", type: "input", message:"Enter customer ID"}]) 
            .then(response => {
              // read by id to get customer
              let customer = readCustomerById(response.getId) 
              inquirer.prompt([
                {name: "getUsername", type: "input", message:"Enter username if updating"},
                {name: "getName", type: "input", message: "Enter name if updating"},
                {name: "getEmail", type: "input", message: "Enter email if updating"}
              ]).then(res => {
      
                res.getUsername == "" ? customer.username = customer.username : customer.username = res.getUsername;
                res.getName == "" ? customer.name = customer.name : customer.name = res.getName;
                res.getEmail == "" ? customer.email = customer.email : customer.email = res.getEmail;
      
                updateCustomer(customer, response.getId)
              })
            })
            break;     
    }
  });
