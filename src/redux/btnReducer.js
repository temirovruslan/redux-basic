import { INCREMENT, DECREMENT } from "./types"

const intialState = {
    likes:0
}

export const btnReducer = (state = intialState,action) => {
    switch (action.type) {
        case INCREMENT:           
            return {likes: state.likes + 1}
        case DECREMENT:
            return {likes: state.likes - 1}
        default:
            return state;
    }
}