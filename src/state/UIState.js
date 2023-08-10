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
    this.rem = 16 // px, updated in App.jsx
    this.vUnit = 1.0 // rem
    this.iUnit = 2.2 // rem
    /* DynPanel.css: gap */
    this.gap = 0.2 // rem

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
              this._module.isThemeLight.obs = !this.isThemeLight
            }
          })
        },
        isThemeDark: {
          name: "Dark",
          symbolName: "themeDark",
          onToggle: action(() => {
            if (!this.isThemeDark) {
              this._module.isThemeLight.obs = false
              this._module.isThemeSystem.obs = false
              this._module.isThemeDark.obs = !this.isThemeDark
            }
          })
        },
        isThemeSystem: {
          name: "System",
          symbolName: "themeSystem",
          onToggle: action(() => {
            if (!this.isThemeSystem) {
              this._module.isThemeLight.obs = false
              this._module.isThemeDark.obs = false
              this._module.isThemeSystem.obs = !this.isThemeSystem
            }
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
          valueMin: 0.3, // rem
          valueMax: 3.0, // rem 
          valueStep: 0.005,
          onUpdate: (value) => {
            document.documentElement.style.setProperty('--vUnit', value + "rem");
          }
        },
        iUnit: {
          name: "Interaction Unit",
          symbolName: null,
          valueMin: 1, // rem
          valueMax: 10, // rem 
          valueStep: 0.01,
          onUpdate: (value) => {
            document.documentElement.style.setProperty('--iUnit', value + "rem");
          }
        },
        rem: {
          name: "root font size px",
          symbolName: null,
        },
        gap: {
          name: "gap between panels",
          symbolName: null,
        },
      },
      comps: {
        paddingLeft: {
          symbolName: null,
          //TODO: abstract this pattern
          obs: () => Math.max(0, (this._module.iUnit.obs - this._module.vUnit.obs) * 0.5),
          value: () => Math.max(0, (this.iUnit - this.vUnit) * 0.5)
        },
        paddingRight: {
          symbolName: null,
          obs: () => Math.max(0, (this._module.iUnit.obs - this._module.vUnit.obs) * 0.5),
          value: () => Math.max(0, (this.iUnit - this.vUnit) * 0.5)
        },
        paddingTop: {
          symbolName: null,
          obs: () => Math.max(0, (this._module.iUnit.obs - this._module.vUnit.obs) * 0.5),
          value: () => Math.max(0, (this.iUnit - this.vUnit) * 0.5)
        },
        paddingBottom: {
          symbolName: null,
          obs: () => Math.max(0, (this._module.iUnit.obs - this._module.vUnit.obs) * 0.5),
          value: () => Math.max(0, (this.iUnit - this.vUnit) * 0.5)
        },
        elemWidth: {
          symbolName: null,
          obs: () => Math.max(this._module.iUnit.obs, this._module.vUnit.obs),
          value: () => Math.max(this.iUnit, this.vUnit)
        },
        elemHeight: {
          symbolName: null,
          obs: () => Math.max(this._module.iUnit.obs, this._module.vUnit.obs),
          value: () => Math.max(this.iUnit, this.vUnit)
        }
      },
      children: {
        presenters: PresentersState
      }

    })


    // trigger an initial update 
    // TODO: add a flag/hook for this pattern
    this._module.vUnit.obs = this.vUnit
    this._module.iUnit.obs = this.iUnit

  }
}

export default UIState