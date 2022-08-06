import {importCustomers} from "../data/import_data.js"

// import our customers data
let customers = importCustomers("../cli_customers/data/customers.txt")

// Read imported data for all customers
export function readAllCustomers() {
    let sorted = customers.sort((a,b) => a.id-b.id)
    console.log(sorted)
    return sorted
}

// Read imported data for one customer
export function readCustomerById(id) {
    // loop through customers
    for(let i = 0; i < customers.length; i++) {
        // if customer matches given id, return customer
        if(customers[i].id == id) {
            return customers[i]
        }
    }
}

// Read by username
export function readCustomerByUsername(username) {
    for(let i = 0; i < customers.length; i++) {
        if(customers[i].username == username) {
            return customers[i]
        }
    }
}