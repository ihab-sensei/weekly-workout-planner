import React, { useEffect, useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "../components/WorkoutForm";
import db from "../firebaseConfig";
import { Button, Modal, Tooltip, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as firebase from "firebase";
import "./style.css";
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default function Day({ name, filter }) {
  const [loading, setLoading] = useState(true);
  const [modalState, setModalState] = useState({ visible: false });
  const [day, setDay] = useState([]);
  const [workoutFormState, setWorkoutFormState] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: ""
  });

  const showModal = () => {
    setModalState({
      visible: true
    });
  };

  const handleOk = () => {
    setModalState({
      visible: false
    });

    /*
    setWorkoutFormState({  
      ...workoutFormState,
       [name]: ""
    });
    console.log(workoutFormState)
    */
  };

  const handleCancel = () => {
    setModalState({
      visible: false
    });
  };

  const addWorkout = () => {
    db.collection(name).add({
      workoutName: workoutFormState[name],
      createdAt: timestamp()
    });

    handleOk();
  };

  useEffect(() => {
    const unsubscribe = db
      .collection(name)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const dataArr = [];
        snapshot.forEach((doc) => {
          dataArr.push({ ...doc.data(), docId: doc.id });
        });
        if (filter === "incomplete") {
          const filteredArr = dataArr.filter(
            (data) => data.isComplete === false
          );
          setDay(filteredArr);
        } else if (filter === "complete") {
          const filteredArr = dataArr.filter(
            (data) => data.isComplete === true
          );
          setDay(filteredArr);
        } else {
          setDay(dataArr);
        }
        setLoading(false);
      });

    return unsubscribe;
  }, [filter]);

  return (
    <div className="weekDay">
      {loading ? (
        <div className="spin">
          <Spin />{" "}
        </div>
      ) : null}
      <Tooltip title="Add">
        <Button
          onClick={showModal}
          type="primary"
          icon={<PlusOutlined />}
          size="small"
        >
          Workout
        </Button>
      </Tooltip>

      {day.map((workout) => (
        <Workout key={workout.docId} name={name} workout={workout} />
      ))}

      <Modal
        title="Add a new workout"
        visible={modalState.visible}
        onOk={addWorkout}
        onCancel={handleCancel}
      >
        <WorkoutForm
          workoutFormState={workoutFormState}
          setWorkoutFormState={setWorkoutFormState}
          name={name}
        />
      </Modal>
    </div>
  );
}
