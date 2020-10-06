import React from "react";

export default function WorkoutForm({
  addWorkout,
  workoutFormState,
  setWorkoutFormState,
  name
}) {
  const handleChange = (e) => {
    setWorkoutFormState({
      ...workoutFormState,
      [e.target.id]: e.target.value
    });
  };
  return (
    <form onSubmit={(e) => addWorkout(e)}>
      <label>Workout name:</label>
      <input
        type="text"
        id={name}
        name="workoutName"
        value={workoutFormState.name}
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Add workout" />
    </form>
  );
}
