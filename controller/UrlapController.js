import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../view/UrlapView.js";

class UrlapController {
  constructor() {
    console.log("constr");
    this.UrlapModel = new UrlapModel();
    this.UrlapView = new UrlapView($(".urlap"), this.UrlapModel.leiro);
    //   console.log(this.UrlapModel.getLeiro())
  }
}
export default UrlapController;
