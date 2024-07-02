import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const invOne = new Invoice("Steven", "Work in riwi", 200);
const invTwo = new Invoice("Jairo", "Work in the website", 800);
let invoices = [invOne, invTwo];
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
console.log(invoices);
