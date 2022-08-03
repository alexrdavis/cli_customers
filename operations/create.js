import fs from 'fs'
import { importCustomers } from "../data/import_data.js"

// Function to create a new customer
export function createCustomer(customer) {
    fs.appendFile("../cli_customers/data/customers.txt", "\n" + JSON.stringify(customer), function(){});
    return customer;
}

// Function to retrieve and store highest ID for customers
export function highestId() {
    // read file for current highest id
    let highest = importCustomers("../cli_customers/data/highest_id.txt");
    // add one to id and write the new highest id to file
    let newHighest = highest[0].id + 1;
    fs.writeFile("../cli_customers/data/highest_id.txt", JSON.stringify({"id":newHighest}), function(){})
    // add that to customer object
    return newHighest;
}