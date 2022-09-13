import React, { useEffect, useState } from "react";
//import useCollapse from "react-collapsed";
import EditWorkout from "./EditWorkout";
import { useNavigate } from "react-router-dom"

function WorkoutDetails({ workout, user, onEventDelete, handleUpdateWorkout }) {
  const [signedUp, setSignedUp] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [data, setData] = useState(workout);
  //const [slots, setSlots] = useState(workout.slots)

  //let navigate = useNavigate()

  //const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  //navigate('/home')
  function doTwoThings() {
    handleDecreaseSlots();
    handleUserSignUp();

    //navigate('/')
  }
  function handleDecreaseSlots() {
    fetch(`/workouts/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        slots: data.slots - 1
      })
    }).then((r) => r.json()).then(res => {
      {
        console.log('update workout', res);
        if (res) {
          setData(res);
        }
      }
    })
  }

  function handleUserSignUp() {
    const signupData = {
      workout_id: data.id, user_id: user.id
    };
    fetch("/signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    })
      .then((r) => r.json())
      .then((data) => {
        setSignedUp(data);
      });
    console.log(`fetch console log ${data.id}, ${user.id}`);
  }

  function handleDeleteClick() {
    fetch(`/workouts/${data.id}`, {
      method: "DELETE",
    });
    onEventDelete(data.id);
  }

  return (
    <div className="workoutdetails" >

      <h2>{data.name}</h2>
      <h5>Description: {data.description}</h5>
      <h5>Date: {data.datewithtime}</h5>
      <h6>Slots: {data.slots}</h6>
      <iframe src={data.video_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
      {user && signedUp ? (
        <p>See you there!</p>
      ) : (
        <button onClick={doTwoThings}>Join Workout</button>
      )}
      {user && user.admin ? (<button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>) : (<p></p>)}
      {user && user.admin ? (<button onClick={handleDeleteClick}>Delete</button>) : (<p></p>)}
      {isEditing ? (
        <EditWorkout workout={data} handleUpdateWorkout={handleUpdateWorkout} />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default WorkoutDetails;
