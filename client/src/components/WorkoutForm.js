import React, { useEffect, useState } from "react";

function WorkoutForm({handleAddWorkout}){
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [slots, setSlots] = useState("")
    const [video_url, setVideoURL] = useState("")



    const handleNewWorkouts = (e) => {
        e.preventDefault();
    
        fetch("/workouts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            date,
            description,
            slots,
            video_url
          }),
        })
          .then((resp) => resp.json())
          .then((newWorkout) => {
            handleAddWorkout(newWorkout);
          });
      };
    
    return(
        <div className="ui segment">
                <form id="form" className="ui form" onSubmit={handleNewWorkouts}>
                <div className="inline fields">
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                    type="text"
                    name="Slots"
                    placeholder="Slots"
                    value={slots}
                    onChange={(e) => setSlots(e.target.value)}
                    />
                    <input
                    type="text"
                    name="VideoURL"
                    placeholder="Video URL"
                    value={video_url}
                    onChange={(e) => setVideoURL(e.target.value)}
                    />

                </div>
                <button className="ui button" type="submit">
                    Add a New Workout
                </button>
                </form>
            </div>
        );
}

export default WorkoutForm;