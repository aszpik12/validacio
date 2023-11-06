class TablaView{
constructor(lista, szuloElem){

    let kiir = `<table>`;
    for (let i = 0; i < lista.length; i++) {
      kiir += `<tr>
                <td>${lista[i].vnev}</td>
                <td>${lista[i].knev}</td>
                <td>${lista[i].szul}</td>
                </tr>`;
    }
    kiir += `</table>`;
    console.log(kiir)
    szuloElem.html(kiir)
  }
}
export default TablaView