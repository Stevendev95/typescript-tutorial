"use strict";
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
