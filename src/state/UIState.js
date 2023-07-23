import { makeObservable, autorun, action } from "mobx"
import * as tjs from 'three'
import { clampCircular, TAU, TAU2, TAU4 } from "@/mathUtils"
import { ACTION, hsTrack } from "./history"

class UIState {

  constructor(root) {
    this.root = root

    // TODO: create enum type -- mutex
    this.isThemeLight = false
    this.isThemeDark = true
    this.isThemeSystem = false
    this.isConfigUI = false


    root.registerModule(root, this, {
      actions: {
      },
      props: {
        isThemeLight: {
          name: "Light",
          symbolName: "themeLight",
          onToggle: action(() => {
            if (!this.isThemeLight) {
              this.props.isThemeDark.value = false
              this.props.isThemeSystem.value = false
            }
            this.props.isThemeLight.value = !this.isThemeLight
          })
        },
        isThemeDark: {
          name: "Dark",
          symbolName: "themeDark",
          onToggle: action(() => {
            if (!this.isThemeDark) {
              this.props.isThemeLight.value = false
              this.props.isThemeSystem.value = false
            }
            this.props.isThemeDark.value = !this.isThemeDark
          })
        },
        isThemeSystem: {
          name: "System",
          symbolName: "themeSystem",
          onToggle: action(() => {
            if (!this.isThemeSystem) {
              this.props.isThemeLight.value = false
              this.props.isThemeDark.value = false
            }
            this.props.isThemeSystem.value = !this.isThemeSystem
          })
        },
        isConfigUI: {
          name: "ConfigUI",
          symbolName: "configUI",
          onToggle: action(() => {
            this.props.isConfigUI.value = !this.isConfigUI
          })
        },
      }
    })

  }

}

export default UIState