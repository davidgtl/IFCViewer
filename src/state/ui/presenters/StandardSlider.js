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
        contentWidthRem: {
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

  contentWidthRem() {
    return this.contentWidthVu * this._module.vUnit.value
  }

  contentLeftAt(percentange) {
    return this._module.paddingLeftRem.obs() + percentange * this.contentWidthVu * this._module.vUnit.value
  }

  contentTopAt(percentange) {
    return (this._module.paddingTopRem.value + percentange * this.contentHeightVu * this._module.vUnit.value)
  }

}

export default StandardSliderState