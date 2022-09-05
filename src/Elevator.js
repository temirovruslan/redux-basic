import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementStairs, decrementStairs} from './redux/actions'


function Elevator() {
	//useSelector - get state from redux
	const stairs = useSelector((state) => state.elevatorReducer.stairs);
	const dispatch = useDispatch();
  
	return (
		<div>
			<h3>Floor{stairs}</h3>
			<button onClick={() => dispatch(incrementStairs())}>UP</button>
			<button onClick={() => dispatch(decrementStairs())}>DOWN</button>
			
		</div>
	);
}

export default Elevator;
