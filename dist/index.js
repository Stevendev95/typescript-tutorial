import { Invoice } from "./classes/Invoice.js";
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
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
console.log(invoices);
