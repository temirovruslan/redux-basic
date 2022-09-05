import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";
import { btnReducer } from './btnReducer';
import { elevatorReducer } from "./elevatorReducer";
import {mountainsReducer} from './mountainsReducer'

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  appReducer,
  btnReducer,
  elevatorReducer,
  mountainsReducer
});
