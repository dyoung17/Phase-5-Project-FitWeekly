import React, {useState, useEffect} from "react";


function EditWorkout({handleUpdateWorkout, workout} ){
    
        const [date, setDate] = useState(workout.date);
        const [name, setName] = useState(workout.name);
        const [slots, setSlots] = useState(workout.slots);
        const [description, setDescription] = useState(workout.description);
        const [video_url, setVideoURL] = useState(workout.video_url)

    
    
    
        function handleFormSubmit(e) {
            e.preventDefault();
            
             fetch(`/workouts/${workout.id}`, {
               method: "PATCH",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({
                date,
                name,
                slots,
                description,
                video_url


               }),
             })
               .then((r) => r.json())
               .then((updatedWorkouts) => handleUpdateWorkout(updatedWorkouts));
          }
    
    
    
    
        return (
        <form className="edit-when" onSubmit={handleFormSubmit}>
            <input type="text" onChange={(e) => setDate(e.target.value)} value={date} name="date" placeholder="" />
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} name="name" placeholder="" />
            <input type="text" onChange={(e) => setSlots(e.target.value)} value={slots} name="slots" placeholder="" />
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} name="description" placeholder="" />
            <input type="text" onChange={(e) => setVideoURL(e.target.value)} value={video_url} name="video url" placeholder="" />
            <input type="submit" value="Save" />
        </form>
        )
      }
    
export default EditWorkout;