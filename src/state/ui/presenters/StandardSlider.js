import { action } from "mobx"
import registerModule from "@/framework/registerModule"

class StandardSliderState {

  constructor(root, parent) {
    this.flow = "row"
    this.contentWidthVu = 6.0
    this.contentHeightVu = 2.2

    this._module = registerModule(root, parent, this, {
      $inherited: [
        { from: parent }
      ],
      props: {
        flow: {
          symbolName: null
        },
        contentWidthVu: {
          symbolName: null
        },
        contentHeightVu: {
          symbolName: null
        },
      },
      comps: {
        contentWidth: {
          symbolName: null
        },
        contentLeftAt: {
          symbolName: null
        },
        contentTopAt: {
          symbolName: null
        },
      }
    })
  }

  contentWidth() {
    return this.contentWidthVu * this._module.vUnit.obs
  }

  contentLeftAt(percentange) {
    return this._module.paddingLeft.obs() + percentange * this.contentWidthVu * this._module.vUnit.obs
  }

  contentTopAt(percentange) {
    return (this._module.paddingTop.obs() + percentange * this.contentHeightVu * this._module.vUnit.obs)
  }

}

export default StandardSliderState