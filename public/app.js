import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    const t = tofrom.value;
    const d = details.value;
    const a = amount.valueAsNumber;
    const h = type.value;
    if (h === "invoice") {
        doc = new Invoice(t, d, a);
    }
    else {
        doc = new Payment(t, d, a);
    }
    list.render(doc, h, "start");
});
