import React from "react";

export default function SectionForm({
  sectionFormState,
  setSectionFormState,
  workoutName,
  addSections,
  setUpdateWorkoutCounter
}) {
  const handleSubmit = (e) => {
    addSections(
      e,
      workoutName,
      sectionFormState.sectionName,
      sectionFormState.sectionDescription
    );
    setUpdateWorkoutCounter((previousState) => {
      return { counter: previousState.counter + 1 };
    });
  };
  const handleChange = (e) => {
    setSectionFormState({
      ...sectionFormState,
      [e.target.id]: e.target.value
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="sectionName">Section name:</label>
      <input
        type="text"
        id="sectionName"
        name="sectionName"
        value={sectionFormState.sectionName}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label for="sectionDescription">Section description:</label>
      <textarea
        id="sectionDescription"
        name="sectionDescription"
        rows="4"
        cols="40"
        value={sectionFormState.sectionDescription}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input type="submit" value="Add section" />
    </form>
  );
}
