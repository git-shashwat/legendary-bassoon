import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("mario", "work on the mario website", 420);
// docTwo = new Payment("luigi", "work on the luigi website", 69);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice("mario", "work on the mario website", 420);
// const invTwo = new Invoice("luigi", "work on the luigi website", 69);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  const t: string = tofrom.value;
  const d: string = details.value;
  const a: number = amount.valueAsNumber;
  if (type.value === "invoice") {
    doc = new Invoice(t, d, a);
  } else {
    doc = new Payment(t, d, a);
  }

  console.log(doc);
});
