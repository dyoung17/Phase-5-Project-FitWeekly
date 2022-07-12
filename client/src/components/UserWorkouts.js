import React from "react"

function UserWorkouts({ workout}) {

    return (
        <div className="workoutdetails">
        <h2>{workout.name}</h2>
        <h5>Date: {workout.datewithtime}</h5>
        <button >❌Resign From Event</button>
        </div>
    );
} 

export default UserWorkouts;