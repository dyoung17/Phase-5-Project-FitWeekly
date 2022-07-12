import React, { useEffect, useState }from "react";
//import useCollapse from "react-collapsed";
import EditWorkout from "./EditWorkout";

function WorkoutDetails({ workout, user, onEventDelete, handleUpdateWorkout }) {
  const [signedUp, setSignedUp] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  function handleUserSignUp() {
    const signupData = {
      workout_id: workout.id,
    };
    fetch("/signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    console.log(`fetch console log ${workout.id}, ${user.id}`);
  }

  function handleDeleteClick() {
    fetch(`/workouts/${workout.id}`, {
      method: "DELETE",
    });
    onEventDelete(workout.id);
  }

  return (
    <div className="workoutdetails" >
      
      <h2>{workout.name}</h2>
      <h5>Description: {workout.description}</h5>
      <h5>Date: {workout.datewithtime}</h5>
      <h6>Slots: {workout.slots}</h6>
      {signedUp ? (
        <p>See you there!</p>
      ) : (
        <button onClick={handleUserSignUp}>Join Workout</button>
      )}
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>⭐Edit</button>
      <button onClick={handleDeleteClick} >❌Delete this Workout</button>
      {isEditing ? (
        <EditWorkout workout={workout} handleUpdateWorkout={handleUpdateWorkout}/>
      ) : (
        <p></p>
      )}
     </div>
  );
}

export default WorkoutDetails;
