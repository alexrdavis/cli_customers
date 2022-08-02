import fs from "fs"
import { importCustomers } from "../data/import_data.js"

let customers = importCustomers("../cli_customers/data/customers.txt")

export function deleteCustomer(id) {
   // set current customers to an array
   let arr = customers;
   // empty file
   fs.writeFile("../cli_customers/data/customers.txt", "", function(){})
    // loop through customers
    for(let i = 0; i < arr.length; i++) {
        // check for match
        if(arr[i].id == id) {
            // remove from array
            let index = arr.indexOf(arr[i])
            arr.splice(index, 1)
            break;
        }
        // append to file with the array of the removed customer
        fs.appendFile("../cli_customers/data/customers.txt", JSON.stringify(arr[i])+"\n", function(){})
    }
    return arr
}