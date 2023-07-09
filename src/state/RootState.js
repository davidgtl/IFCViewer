import { makeAutoObservable } from "mobx"


class RootState {
  count = 0
  constructor() {
    makeAutoObservable(this)
  }

  tick() {
    this.count++
  }
}

export default RootState