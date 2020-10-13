import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import Sections from "./Sections";
import EditWorkoutForm from "../components/EditWorkoutForm";
import { Tooltip, Typography, Button, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;
export default function Workout({ name, workout }) {
  const [modalState, setModalState] = useState({ visible: false });
  const [editWorkoutFormState, setEditWorkoutFormState] = useState("");
  // const fetchSections = async () => {
  //   const res = await db
  //     .collection(name)
  //     .doc(workout.workoutName)
  //     .collection("Sections")
  //     .get();
  //   const datas = res.docs.map((data) => data.data());
  //   console.log(datas);
  //   //setSections(datas);
  // };

  const deleteWorkout = async () => {
    const res = await db
      .collection(name)
      .doc(workout.docId)
      .collection("Sections")
      .get();
    const datas = res.docs.map((data) => data.id);
    console.log(datas);
    datas.forEach((doc) => {
      console.log(doc);
      db.collection(name)
        .doc(workout.docId)
        .collection("Sections")
        .doc(doc)
        .delete();
    });
    console.log(datas);
    db.collection(name)
      .doc(workout.docId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((err) => {
        console.error("Error removing document: ", err);
      });
  };

  const editWorkout = (e) => {
    e.preventDefault();
    //deleteWorkout(); // this does not delete the inner collection.
    db.collection(name)
      .doc(workout.docId)
      .update({ workoutName: editWorkoutFormState });

    handleOk();
  };
  const showModal = () => {
    setModalState({
      visible: true,
    });
  };

  const handleOk = () => {
    setModalState({
      visible: false,
    });
  };

  const handleCancel = () => {
    setModalState({
      visible: false,
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
      <Sections name={name} workout={workout} />

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
