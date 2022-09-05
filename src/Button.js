import React from 'react'
import { INCREMENT,DECREMENT } from './redux/types';
import {useDispatch, useSelector} from "react-redux";

function Button({props}) {
  //useSelector - get state from redux
  const counter = useSelector(state => state.likes);
  const dispatch = useDispatch();


  return (
    <div>
        {/* <button onClick={() => dispatch({type:INCREMENT})}>Plus{'    '}{counter}</button> */}
        <button>Minus</button>
    </div>
  )
}

export default Button