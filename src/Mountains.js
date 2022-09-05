import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incMountains, decMountains} from "./redux/actions";

function Mountains() {
	const counter = useSelector((state) => {
		return state.mountainsReducer.count;
	});
	const dispatch = useDispatch();

  const handleClimb = () => {
    return dispatch(incMountains()) 
  }
  const handleClimbDown = () => {
    return dispatch(decMountains()) 
  }

	return (
		<div>
			<h1>Mountains climbs for _ {counter}</h1>
			<button onClick={handleClimb}>Climb mountaint + 1</button>
			<button onClick={handleClimbDown}>Climb mountaint - 1</button>
		</div>
	);
}

export default Mountains;
