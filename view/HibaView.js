class HibaView{
    constructor(error, szuloElem){
        this.szuloElem = szuloElem
        console.log(szuloElem)
        this.szuloElem.html(error.message)
        console.log(error)

    }
}
export default HibaView