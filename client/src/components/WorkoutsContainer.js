import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import WorkoutDetails from "./WorkoutDetails";

import WorkoutForm from "./WorkoutForm";

WorkoutsContainer.defaultProps = {
  user: null
}

WorkoutsContainer.propTypes = {
  user: PropTypes.instanceOf(Object)
};

function WorkoutsContainer({ user }) {
  const [workouts, setWorkouts] = useState([]);
  //const admin = user.admin
  //console.log(admin)

  //const [sortedWorkouts, setSortedWorkouts] = useState([])  

  console.log(user)

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then(setWorkouts);
  }, []);

  function handleUpdateWorkout(updatedWorkout) {
    const updatedWorkouts = workouts.map((workout) => {
      if (workout.id === updatedWorkout.id) {
        return updatedWorkout;
      } else {
        return workout;
      }
    });
    setWorkouts(updatedWorkouts);
  }
  
  function onWorkoutDelete(id) {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
  }

  function handleAddWorkout(newWorkout) {
    setWorkouts([...workouts, newWorkout]);
  }

  return (
    <div>
      {user && user.admin ? (<WorkoutForm handleAddWorkout={handleAddWorkout}/>) : <p></p>} 
      {workouts.map((workout) => {
        return <WorkoutDetails key={workout.id} workout={workout} user={user} onWorkoutDelete={onWorkoutDelete} handleUpdateWorkout={handleUpdateWorkout} />
      })}
      
    </div>
  );
}

export default WorkoutsContainer;
