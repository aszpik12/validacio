import UrlapTextElem from "./UrlapTextElem.js";
import UrlapNumberElem from "./UrlapNumberElem.js";
import UrlapDateElem from "./UrlapDateElem.js";
class UrlapView {
  #adatLeiras = {};
  #inputElemek = [];
  #valid;
  #urlapAdat = {};
  constructor(adatLeiras, szuloElem) {
    this.#adatLeiras = adatLeiras;
    this.#inputElemek = [];
    this.#valid = true;
    this.szuloElem = szuloElem;

    szuloElem.append("<form class=''>");
    this.formElem = this.szuloElem.children("form");
    this.htmlOsszallit();
    this.submitElem = $("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#valid = true;
      this.#inputElemek.forEach((element) => {
        this.#valid = this.#valid && element.valid;
      });
      console.log(this.#valid);
      if (this.#valid) {
        this.#adatGyujt();
      }
    });
  }
  #adatGyujt() {
    this.#inputElemek.forEach((element) => {
      this.#urlapAdat[element.kulcs] = element.value;
    });
    console.log(this.#urlapAdat);
  }
  htmlOsszallit() {
    for (const key in this.#adatLeiras) {
      switch (this.#adatLeiras[key].tipus) {
        case "text":
          this.#inputElemek.push(
            new UrlapTextElem(this.#adatLeiras[key], key, this.formElem)
          );
          break;
        case "number":
          this.#inputElemek.push(
            new UrlapNumberElem(this.#adatLeiras[key], key, this.formElem)
          );
          break;
        case "date":
          this.#inputElemek.push(
            new UrlapDateElem(this.#adatLeiras[key], key, this.formElem)
          );
          break;
        default:
      }
    }
    this.formElem.append("<input type='submit' id='submit' value='OK'>");
  }
}
export default UrlapView;
