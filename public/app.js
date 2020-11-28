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
    list.render(doc, h, "end");
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID(45);
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: ["shaun", "haun"],
    blob: { characters: "44hfksa94" },
};
console.log(docThree);
