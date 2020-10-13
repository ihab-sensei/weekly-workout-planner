import React, { useEffect, useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "../components/WorkoutForm";
import db from "../firebaseConfig";
import { Button, Modal, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function Day({ name }) {
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
    });*/
  };

  const handleCancel = () => {
    setModalState({
      visible: false
    });
  };

  const addWorkout = () => {
    db.collection(name).add({ workoutName: workoutFormState[name] });

    handleOk();
  };

  useEffect(() => {
    const unsubscribe = db.collection(name).onSnapshot((snapshot) => {
      const dataArr = [];
      snapshot.forEach((doc) => {
        console.log(doc.id);
        dataArr.push({ ...doc.data(), docId: doc.id });
      });
      setDay(dataArr);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="weekDay">
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
