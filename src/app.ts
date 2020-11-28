import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { HasProfile } from "./interfaces/HasProfile.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  const t: string = tofrom.value;
  const d: string = details.value;
  const a: number = amount.valueAsNumber;
  const h: string = type.value;
  if (h === "invoice") {
    doc = new Invoice(t, d, a);
  } else {
    doc = new Payment(t, d, a);
  }

  list.render(doc, h, "end");
});

// GENERICS
const addUID = <T extends HasProfile>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { title: "luigi" },
};

console.log(docOne, docTwo);
