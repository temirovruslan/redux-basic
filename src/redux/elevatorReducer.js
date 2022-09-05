import { UP, DOWN } from "./types"

const intialState = {
  stairs: 1
}

export const elevatorReducer = (state = intialState, action) => {
  console.log('action', action);

  switch(action.type) {

    case UP:
      return {stairs: state.stairs + 1}
    case DOWN:
      return {stairs: state.stairs - 1}

    default:
      return state;
  }
}