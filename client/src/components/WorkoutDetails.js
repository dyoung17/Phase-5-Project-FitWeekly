import React, { useEffect, useState }from "react";
//import useCollapse from "react-collapsed";
import EditWorkout from "./EditWorkout";

function WorkoutDetails({ workout, user, onEventDelete, handleUpdateWorkout }) {
  const [signedUp, setSignedUp] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  function doTwoThings(){
    handleDecreaseSlots();
    handleUserSignUp();
}
  function handleDecreaseSlots (){
  fetch(`/workouts/${workout.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      slots: workout.slots - 1
    })
  }).then((r)=>r.json())
}

  function handleUserSignUp() {
    const signupData = {
      workout_id: workout.id, user_id: user.id
    };
    fetch("/signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    })
      .then((r) => r.json())
      .then((data) => setSignedUp(data));
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
      <iframe src={workout.video_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe> 
      {user && signedUp ? (
        <p>See you there!</p>
      ) : (
        <button onClick={doTwoThings}>Join Workout</button>
      )}
      {user && user.admin ? (<button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>) : (<p></p>)}
      {user && user.admin ? (<button onClick={handleDeleteClick}>Delete</button>) : (<p></p>)}
      {isEditing ? (
        <EditWorkout workout={workout} handleUpdateWorkout={handleUpdateWorkout}/>
      ) : (
        <p></p>
      )}
     </div>
  );
}

export default WorkoutDetails;
