import registerModule from "@/framework/registerModule"
import StandardSliderState from "./presenters/StandardSlider"

class PresentersState {

  constructor(root, parent) {

    this._module = registerModule(root, parent, this, {
      children: {
        standardSlider: StandardSliderState
      },
      $inherited: [
        { from: parent }
      ]
    })
  }

}

export default PresentersState