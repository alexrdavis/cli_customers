import fs from "fs"
import {readAllCustomers} from "../operations/read.js"
import {deleteCustomer} from "../operations/delete.js"

let readAll = readAllCustomers()

export function updateCustomer(updatedCustomer, id) {
    // delete customer that needs updating
    deleteCustomer(id)
    // append file with updated customer details
    fs.appendFile("../cli_customers/data/customers.txt", JSON.stringify(updatedCustomer) + "\n", function(){})
}