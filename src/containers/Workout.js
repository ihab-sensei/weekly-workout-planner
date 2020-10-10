import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import Sections from "./Sections";
import EditWorkoutForm from "../components/EditWorkoutForm";
import { Tooltip, Typography, Button, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;
export default function Workout({ name, workout, setUpdateCounter }) {
  const [modalState, setModalState] = useState({ visible: false });
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

  const editWorkout = (e) => {
    e.preventDefault();
    deleteWorkout();
    db.collection(name)
      .doc(editWorkoutFormState)
      .set({ workoutName: editWorkoutFormState });
    setUpdateCounter((previousState) => {
      return { counter: previousState.counter + 1 };
    });
    handleOk();
  };
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

  return (
    <>
      <div>
        <Title style={{ display: "inline" }} level={5}>
          {workout.workoutName}
        </Title>
        <Tooltip title="Edit">
          <Button
            onClick={showModal}
            type="text"
            shape="circle"
            icon={<EditOutlined />}
          ></Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            danger={true}
            onClick={deleteWorkout}
            type="text"
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      </div>
      <Sections
        name={name}
        sections={sections}
        setUpdateWorkoutCounter={setUpdateWorkoutCounter}
        workout={workout}
      />

      <Modal
        title="Edit the name of the workout"
        visible={modalState.visible}
        onOk={editWorkout}
        onCancel={handleCancel}
      >
        <EditWorkoutForm
          workoutName={workout.workoutName}
          setEditWorkoutFormState={setEditWorkoutFormState}
          editWorkoutFormState={editWorkoutFormState}
        />
      </Modal>
    </>
  );
}
