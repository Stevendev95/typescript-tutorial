class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes $ ${this.amount} for this ${this.details}`;
  }
}

const invOne = new Invoice("Steven", "Work in riwi", 200);
const invTwo = new Invoice("Jairo", "Work in the website", 800);

let invoices: Invoice[] = [invOne, invTwo];

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;

const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (ev: Event) => {
  ev.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});

console.log(invoices);
