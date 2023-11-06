import AdatModel from "../model/AdatModel.js"
import DataService from "../model/DataService.js"
import AdatView from "../view/AdatView.js"
import HibaView from "../view/hibaView.js"
class AdatController{
    constructor(){
        console.log("Constr")
        this.dataService= new DataService()
        this.dataService.getData("../model/adat.json",this.adatokMegj, this.hibaMegj)
    }

    adatokMegj(lista){
        console.log(lista)
        new AdatView(lista, $('.lista'))
    }
    hibaMegj(error){
        console.log(error)
        new HibaView(error, $('.lista'))
    }
}
export default AdatController