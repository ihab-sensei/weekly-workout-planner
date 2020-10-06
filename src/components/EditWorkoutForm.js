import React from "react";

export default function EditWorkoutForm({
  workoutName,
  setEditWorkoutFormState,
  editWorkoutFormState,
  editWorkout
}) {
  const handleChange = (e) => {
    setEditWorkoutFormState(e.target.value);
  };
  return (
    <form onSubmit={(e) => editWorkout(e)}>
      <label>Workout name:</label>
      <input
        type="text"
        id={workoutName}
        name="workoutName"
        value={editWorkoutFormState}
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Edit workout" />
    </form>
  );
}
