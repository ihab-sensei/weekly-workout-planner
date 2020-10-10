import React, { useEffect, useState } from "react";
import Workout from "./Workout";
import WorkoutForm from "../components/WorkoutForm";
import db from "../firebaseConfig";
import { Button, Modal, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function Day({ name }) {
  const [modalState, setModalState] = useState({ visible: false });
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
  const showModal = () => {
    setModalState({
      visible: true
    });
  };

  const handleOk = () => {
    setModalState({
      visible: false
    });
  };

  const handleCancel = () => {
    setModalState({
      visible: false
    });
  };

  const addWorkout = () => {
    db.collection(name)
      .doc(workoutFormState[name])
      .set({ workoutName: workoutFormState[name] });
    setUpdateCounter((previousState) => {
      return { counter: previousState.counter + 1 };
    });
    handleOk();
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
        <Workout
          setUpdateCounter={setUpdateCounter}
          name={name}
          workout={workout}
        />
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
