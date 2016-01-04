import {HELLO_WORLD} from '../constants/index'

export const helloWorld = (state=[], action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return [...state, {a:HELLO_WORLD}]
    default:
      return state
  }
}
