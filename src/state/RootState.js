import { makeAutoObservable } from "mobx"


class RootState {
  count = 0
  constructor() {
    makeAutoObservable(this)
    // TODO: initialize child states here, mark root with makeAutoObservable(this, { root: false })
  }

  tick() {
    this.count++
  }
}

export default RootState