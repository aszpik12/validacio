class UrlapNumberElem {
  #leiras = {};
  #kulcs;
  #valid;
  #value;
  constructor(leiras, kulcs, szuloElem) {
    this.#valid = false;
    this.#kulcs = kulcs;
    this.#leiras = leiras;
    this.#value = "";
    this.formElem = szuloElem;
    this.urlapNumberElem();

    this.inputElem.on("keyup", (event) => {
      this.#value = this.inputElem.val();
      console.log(this.#value);
      if (
        this.#value < this.#leiras.pattern.max &&
        this.#value > this.#leiras.pattern.min
      ) {
        this.validElem.removeClass("valid-visible");
        this.invalidElem.addClass("invalid-visible");
        this.validElem.html("OK");
        this.#valid = true;
      } else {
        this.invalidElem.removeClass("invalid-visible");
        this.validElem.addClass("valid-visible");
        this.invalidElem.html(this.#leiras.szoveg);
        this.#valid = false;
      }
    });
  }
  get value() {
    return this.#value;
  }
  get kulcs() {
    return this.#kulcs;
  }
  get valid() {
    if (this.#leiras.required && this.inputElem.val() == "") {
      this.#valid = false;
      this.invalidElem.removeClass("invalid-visible");
      this.validElem.addClass("valid-visible");
      this.invalidElem.html(" Az elem kötelező!");
    }
    return this.#valid;
  }
  urlapNumberElem() {
    let txt = `<div id="${this.#kulcs}blokk" class="mb-3 mt-3">
                        <label for="${this.#kulcs}" class="form-label">${
      this.#leiras.megjelenes
    }</label>
                        <input type="${this.#leiras.tipus}" 
                               id="${
                                 this.#kulcs
                               }"                               
                               name="${this.#kulcs}"
                               min="${this.#leiras.pattern.min}" max="${
      this.#leiras.pattern.max
    }"
                               class="form-control" >
                        <div class="valid">valid</div>
                        <div class="invalid">  invalid</div>
                    </div>`;
    this.formElem.append(txt);
    this.inputElem = $(`#${this.#kulcs}`);
    this.inputElem.attr("required", this.#leiras.required ? "required" : null);
    console.log(this.inputElem);
    this.validElem = this.formElem
      .children("div:last-child")
      .children(".valid");
    this.invalidElem = this.formElem
      .children("div:last-child")
      .children(".invalid");

    this.invalidElem.addClass("invalid-visible");
    this.validElem.addClass("valid-visible");
  }
}
export default UrlapNumberElem;
