import React, { useEffect, useState } from "react";
import SectionForm from "../components/SectionForm";
import db from "../firebaseConfig";
import Section from "../components/Section";
import EditWorkoutForm from "../components/EditWorkoutForm";
export default function Workout({
  name,
  workout,
  addSections,
  setUpdateCounter
}) {
  const [sectionFormState, setSectionFormState] = useState({
    sectionName: "",
    sectionDescription: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [sections, setSections] = useState([]);
  const [updateWorkoutCounter, setUpdateWorkoutCounter] = useState({
    counter: 0
  });
  const [editWorkoutFormState, setEditWorkoutFormState] = useState("");
  const fetchSections = async (workoutName) => {
    const res = await db
      .collection(name)
      .doc(workoutName)
      .collection("Sections")
      .get();
    const datas = res.docs.map((data) => data.data());
    console.log(datas);
    setSections(datas);
  };
  useEffect(() => {
    fetchSections(workout.workoutName);
  }, [updateWorkoutCounter]);

  const deleteWorkout = () => {
    db.collection(name)
      .doc(workout.workoutName)
      .delete()
      .then(() => {
        setUpdateCounter((previousState) => {
          return { counter: previousState.counter + 1 };
        });
        console.log("Document successfully deleted!");
      })
      .catch((err) => {
        console.error("Error removing document: ", err);
      });
  };
  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const editWorkout = (e) => {
    e.preventDefault();
    deleteWorkout();
    db.collection(name)
      .doc(editWorkoutFormState)
      .set({ workoutName: editWorkoutFormState });
    setUpdateCounter((previousState) => {
      return { counter: previousState.counter + 1 };
    });
  };

  return (
    <>
      <li>
        {isEditing ? (
          <EditWorkoutForm
            workoutName={workout.workoutName}
            editWorkout={editWorkout}
            setEditWorkoutFormState={setEditWorkoutFormState}
            editWorkoutFormState={editWorkoutFormState}
          />
        ) : null}
        <b>{workout.workoutName}</b>
        <button onClick={handleIsEditing}>Edit</button>
        <button onClick={deleteWorkout}>Delete</button>
        <Section sections={sections} />
      </li>
      <SectionForm
        setUpdateWorkoutCounter={setUpdateWorkoutCounter}
        sectionFormState={sectionFormState}
        setSectionFormState={setSectionFormState}
        addSections={addSections}
        workoutName={workout.workoutName}
      />
    </>
  );
}
