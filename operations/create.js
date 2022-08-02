import fs from 'fs'

// Function to create a new customer
export function createCustomer(customer) {
    fs.appendFile("../cli_customers/data/customers.txt", "\n" + JSON.stringify(customer), function(){});
    return customer;
}