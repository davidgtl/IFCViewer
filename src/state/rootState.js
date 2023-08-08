import registerModule from "@/framework/registerModule"

import RenderState from "./RenderState"
import IFCParserState from "./IFCParserState"
import OBJParserState from "./OBJParserState"
import UIState from "./UIState"

class RootState {
  constructor() {

    this.count = 0

    this._module = registerModule(null, null, this, {
      actions: {
        loadLucySample: {
          symbolName: null,
        },
        loadInstituteSample: {
          symbolName: null,
        },
        loadHausSample: {
          symbolName: null,
        },
        loadChurchSample: {
          symbolName: null,
        }
      },
      props: {
        count: {
          symbolName: null,
        }
      },
      children: {
        ui: UIState,
        render: RenderState,
        ifcParser: IFCParserState,
        objParser: OBJParserState,
      }
    })

  }

  loadLucySample() {
    this._module.objParser.loadFromURL.action("./samples/lucy.obj")
  }
  loadInstituteSample() {
    this._module.ifcParser.loadFromURL.action("./samples/AC20-Institute-Var-2.ifc")
  }
  loadHausSample() {
    this._module.ifcParser.loadFromURL.action("./samples/AC20-FZK-Haus.ifc")
  }
  loadChurchSample() {
    this._module.objParser.loadFromURL.action("./samples/20221025SantAntiniDelAbad_Llombay1M_CC0.obj")
  }

  saveState(state) {
    window.localStorage.setItem('state', JSON.stringify(state))
  }
  loadState() {
    return JSON.parse(window.localStorage.getItem('state'))
  }
}

const rootState = new RootState()._module
export default rootState