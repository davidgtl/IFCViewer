import { action } from "mobx"
import PresentersState from "./ui/PresentersState";
import registerModule from "@/framework/registerModule"

class UIState {

  constructor(root, parent) {

    // TODO: create enum type -- mutex
    this.isThemeLight = false
    this.isThemeDark = true
    this.isThemeSystem = false
    this.isConfigUI = false
    /* index.css: --main-lum-dark */
    this.mainLumDark = 28.3
    /* index.css: --main-lum-light */
    this.mainLumLight = 84.8

    /*
      -------  -
      |     |  |
      |  $  |  |  I <- vUnit = length of one readable symbol  
      |     |  | <- iUnit = length of one clickable region
      -------  -          = padding + vUnit + padding
          
    */

    this.unit = "rem"
    this.vUnit = 1.0 // rem
    this.iUnit = 2.0 // rem

    this._module = registerModule(root, parent, this, {
      actions: {
      },
      props: {
        isThemeLight: {
          name: "Light",
          symbolName: "themeLight",
          onToggle: action(() => {
            // TODO: mutex groups
            if (!this.isThemeLight) {
              this._module.isThemeDark.obs = false
              this._module.isThemeSystem.obs = false
            }
            this._module.isThemeLight.obs = !this.isThemeLight
          })
        },
        isThemeDark: {
          name: "Dark",
          symbolName: "themeDark",
          onToggle: action(() => {
            if (!this.isThemeDark) {
              this._module.isThemeLight.obs = false
              this._module.isThemeSystem.obs = false
            }
            this._module.isThemeDark.obs = !this.isThemeDark
          })
        },
        isThemeSystem: {
          name: "System",
          symbolName: "themeSystem",
          onToggle: action(() => {
            if (!this.isThemeSystem) {
              this._module.isThemeLight.obs = false
              this._module.isThemeDark.obs = false
            }
            this._module.isThemeSystem.obs = !this.isThemeSystem
          })
        },
        isConfigUI: {
          name: "Configure UI",
          symbolName: "configUI",
          onToggle: action(() => {
            this._module.isConfigUI.obs = !this.isConfigUI
          })
        },
        vUnit: {
          name: "Visual Unit",
          symbolName: null,
          valueMin: 0.1, // rem
          valueMax: 10.0, // rem 
          valueStep: 0.1
        },
        iUnit: {
          name: "Interaction Unit",
          symbolName: null,
          valueMin: 0.1, // rem
          valueMax: 10.0, // rem 
          valueStep: 0.1
        },
      },
      comps: {
        paddingLeftRem: {
          symbolName: null,
          obs: () => (this.iUnit - this.vUnit) * 0.5
        },
        paddingRightRem: {
          symbolName: null,
          obs: () => (this.iUnit - this.vUnit) * 0.5
        },
        paddingTopRem: {
          symbolName: null,
          obs: () => (this.iUnit - this.vUnit) * 0.5
        },
        paddingBottomRem: {
          symbolName: null,
          obs: () => (this.iUnit - this.vUnit) * 0.5
        }
      },
      children: {
        presenters: PresentersState
      }

    })

  }
}

export default UIState