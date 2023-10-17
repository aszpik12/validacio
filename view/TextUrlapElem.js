class TextUrlapElem {
  #key;
  #elemLeiro = {};
  #valid=false;

  constructor(key, elemLeiro, szuloElem) {
    this.#key = key;
    this.#elemLeiro = elemLeiro;
    this.formElem = szuloElem;
    this.#textElem();
    this.inputElem = $(`${this.#key}`);
    this.validElem = this.formElem
      .children("div:last-child")
      .children(".valid");
    this.invalidElem = this.formElem
      .children("div:last-child")
      .children(".invalid");
    console.log(this.validElem);
    console.log(this.invalidElem);

    this.inputElem.on("keyup", () => {
      let ertek = this.inputElem.val();
      let reg = this.#elemLeiro.regex;
      let regReg = new RegExp(reg);
      if (regReg.test(ertek)) {
        this.#valid=true
        this.validElem.removeClass("lathatosag");
        this.invalidElem.addClass("lathatosag");
      } else {
        this.#valid=false
        this.validElem.addClass("lathatosag");
        this.invalidElem.removeClass("lathatosag");
      }
    });
  }


  #textElem() {
    let txt = `<div class="mb-3 mt-3">
        <label for="${this.#key}" class="form-label">${
      this.#elemLeiro.megj
    }</label>
        <input type="${this.#elemLeiro.type}" 
        class="form-control" 
        id="${this.#key}"
        name="${this.#key}"
        placeholder="${this.#elemLeiro.placeholder}" 
        value="${this.#elemLeiro.value}"
        pattern="${this.#elemLeiro.regex}"
        ">
        <div class="valid lathatosag">OK</div>
        <div class="invalid lathatosag">${this.#elemLeiro.valid}</div>
      </div>`;
    this.formElem.append(txt);
  }
}
export default TextUrlapElem;
