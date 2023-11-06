import TextUrlapElem from "./TextUrlapElem.js";

class UrlapView {
  #leiro = {};
  #valid = false;
  #urlapElemList = [];
  #urlapAdatok = {};
  constructor(szuloElem, leiro) {
    this.#leiro = leiro;
    this.szuloElem = szuloElem;
    this.szuloElem.append("<form>");
    this.formElem = this.szuloElem.children("form");
    console.log(this.formElem);
    this.#urlapLetrehoz();
    this.submitElem = $("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();

      this.#urlapElemList.forEach(elem, () => {
        console.log(elem.value);
        this.#valid = this.#valid && elem.valid;
        console.log(this.#valid);
      });
      if (this.#valid) {
        console.log("az űrlap valid ");
      } else {
        console.log("az űrlap nem valid ");
      }
    });
  }
  #urlapLetrehoz() {
    for (const key in this.#leiro) {
      switch (this.#leiro[key].type) {
        case "text":
          new TextUrlapElem(key, this.#leiro[key], this.formElem);
          break;
        case "number":
          this.#numberElem(key);
          break;
        default:
      }
    }
    let txt = "<input type='submit' id='submit' value='ok'>";
    this.formElem.append(txt);
    console.log(txt);
  }

  #numberElem(key) {
    let txt = `<div class="mb-3 mt-3">
    <label for="${key}" class="form-label">${this.#leiro[key].megj}</label>
    <input type="${this.#leiro[key].type}" 
    class="form-control" 
    id="${key}"
    name="${key}"
    placeholder="${this.#leiro[key].placeholder}" 
    value="${this.#leiro[key].value}"
    min="${this.#leiro[key].regex.min}"
    max="${this.#leiro[key].regex.max}"
    ">
  </div>`;

    this.formElem.append(txt);
  }

  get valid() {
    return this.#valid;
  }

  get ertek() {
    return this.#ertek;
  }

  get key() {
    return this.#key;
  }

  
}
export default UrlapView;
