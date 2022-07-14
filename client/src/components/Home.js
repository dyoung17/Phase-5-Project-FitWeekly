import React, { useState, useEffect } from "react";

import UserWorkouts from "./UserWorkouts.js"

function Home({ user }) {
  const [userWorkouts, setUserWorkouts] = useState([]);
  const [signups, setSignups] = useState([]);

  useEffect(() => {
    if (user?.id) {
      fetch(`/users/${user.id}`)
        .then(r => r.json())
        .then(user => {
          setUserWorkouts(user.workouts);
          setSignups(user.signups);
        });
    };
  }, [user?.id]);

  async function handleDeleteSignup(workout) {
    try {
      (await fetch(`/workouts/${workout.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          slots: workout.slots - 1
        })
      })).json();

      const signup = signups.find(s => s.workout_id === workout.id);
      if (signup) {
        await fetch(`/signups/${signup.id}`, { method: "DELETE" });
      }

      const updatedsignups = signups.filter((signup) => signup.id !== workout.id);
      setSignups(updatedsignups);

      const updatedUserWorkouts = userWorkouts.filter((w) => w.id !== workout.id);
      setUserWorkouts(updatedUserWorkouts);      
    } catch (err) {
      console.log('an error occurred==>>', err);
    }
  }

  return (
    //  <div className="profileCard">
    //  <h2>{user.last_name}, {user.first_name}</h2>
    //   <h5>Phone Number: {user.phone_number}</h5>
    //   <h5>Email: {user.email}</h5>
    // </div>,
    <div>

      {user ? (
        <div class="VE-text">You ready to get fit? You have {signups.length} workouts upcoming !</div>
      ) : (
        <div class="VE-text">Sign in to join our available workouts</div>
      )}
      {userWorkouts.map((workout) => {
        return <UserWorkouts workout={workout} key={workout.id} user={user} handleDeleteSignup={handleDeleteSignup} />
      })}
    </div>
  );
}



export default Home;
