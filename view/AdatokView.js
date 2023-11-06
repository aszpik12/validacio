import AdatView from "./AdatView.js";

class AdatokView {
  #adat = [];
  #tipus = {};
  #kulcs = {};
  constructor(adat, kulcs, tipus, szuloElem) {
    this.#adat = adat;
    this.#tipus = tipus;
    this.#kulcs = kulcs;
    this.szuloElem = szuloElem;
    szuloElem.append("<table>");
    this.tableElem = this.szuloElem.children("table");
    this.htmlOsszallit();
  }
  htmlOsszallit() {
    console.log(this.#adat);
    array.forEach((element) => {
      new AdatView(element, kulcs, tipus, this.tableElem);
    });
  }
}
export default AdatokView;
