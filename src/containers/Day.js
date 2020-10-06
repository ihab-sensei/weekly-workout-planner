import React, { useEffect, useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "../components/WorkoutForm";
import db from "../firebaseConfig";
export default function Day({ name }) {
  const [day, setDay] = useState([]);
  const [updateCounter, setUpdateCounter] = useState({ counter: 0 });
  const [workoutFormState, setWorkoutFormState] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: ""
  });

  const addWorkout = (e) => {
    e.preventDefault();
    db.collection(name)
      .doc(workoutFormState[name])
      .set({ workoutName: workoutFormState[name] });
    setUpdateCounter((previousState) => {
      return { counter: previousState.counter + 1 };
    });
  };
  const addSections = (e, workoutName, sectionName, sectionDescription) => {
    e.preventDefault();
    db.collection(name)
      .doc(workoutName)
      .collection("Sections")
      .doc(sectionName)
      .set({
        sectionName: sectionName,
        sectionDescription: sectionDescription
      });
  };

  const fetchData = async () => {
    const res = await db.collection(name).get();
    const datas = res.docs.map((data) => data.data());
    console.log(datas);
    setDay(datas);
  };

  useEffect(() => {
    fetchData();
  }, [updateCounter]);

  return (
    <div className="weekDay">
      <h3>Workouts:</h3>
      <ul>
        {day.map((workout) => (
          <Workout
            setUpdateCounter={setUpdateCounter}
            name={name}
            addSections={addSections}
            workout={workout}
          />
        ))}
      </ul>
      <WorkoutForm
        workoutFormState={workoutFormState}
        setWorkoutFormState={setWorkoutFormState}
        addWorkout={addWorkout}
        name={name}
      />
    </div>
  );
}
