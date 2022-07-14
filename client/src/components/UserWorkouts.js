
import React, { useEffect, useState }from "react";

function UserWorkouts({ workout, handleDeleteSignup}) {
    console.log(workout)

    return (
        <div className="workoutdetails">
            <h2>{workout.name}</h2>
            <h5>Date: {workout.datewithtime}</h5>
            <button onClick={() => handleDeleteSignup(workout)}>Leave Workout</button>
        </div>
    );
} 

export default UserWorkouts;