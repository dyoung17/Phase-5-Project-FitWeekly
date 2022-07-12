import React, {useState, useEffect } from "react";

import UserWorkouts from "./UserWorkouts.js"


function Home({ user }) {
    const [userWorkouts, setUserWorkouts] = useState([]);
    const [signups, setSignups] = useState([]);

   

  useEffect(()=> {
    fetch('/signups')
      .then((r) => r.json())
      .then((signups) => setSignups(signups));
  }, []);


   useEffect(() => {
    if (user?.id) {
      fetch(`/users/${user.id}`)
      .then(r => r.json())
       .then(user => setUserWorkouts(user.workouts));
    };  
   }, [user?.id]);

   console.log('workouts', userWorkouts)

   

   function handleDeleteSignup(id) {
    const updatedsignups = signups.filter((signup) => signup.id !== id);
    setSignups(updatedsignups);
  }



  
    
  return (
    // <div className="profileCard">
    //   <h2>{user.last_name}, {user.first_name}</h2>
    //   <h5>Phone Number: {user.phone_number}</h5>
    //   <h5>Email: {user.email}</h5>
    // </div>,
    <div >
    
      {user ? (
        <div class="VE-text">You ready to get fit?</div>
        ) : (
        <div class="VE-text">Sign in to join our available workouts</div>
        )}
      {userWorkouts.map((workout) => {
        return <UserWorkouts workout={workout} key={workout.id} user={user} handleDeleteSignup={handleDeleteSignup}/>
       })}
    </div>
  );
}



export default Home;
