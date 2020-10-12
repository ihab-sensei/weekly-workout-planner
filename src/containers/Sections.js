import React, { useEffect, useState } from "react";
import SectionForm from "../components/SectionForm";
import db from "../firebaseConfig";
import Section from "../components/Section";
import EditWorkoutForm from "../components/EditWorkoutForm";
import { Tooltip, Typography, Button, Modal, Space } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function Sections({
  //sections,
  workout,
  setUpdateWorkoutCounter,
  name
}) {
  const [sections, setSections] = useState([]);
  const [sectionFormState, setSectionFormState] = useState({
    sectionName: "",
    sectionDescription: ""
  });
  const [sectionModalState, setSectionModalState] = useState({
    visible: false
  });

  const showModal = () => {
    setSectionModalState({
      visible: true
    });
  };
  const handleOk = () => {
    setSectionModalState({
      visible: false
    });
  };

  const handleCancel = () => {
    setSectionModalState({
      visible: false
    });
  };
  const addSections = () => {
    db.collection(name)
      .doc(workout.workoutName)
      .collection("Sections")
      .doc(sectionFormState.sectionName)
      .set({
        sectionName: sectionFormState.sectionName,
        sectionDescription: sectionFormState.sectionDescription
      });/*
    setUpdateWorkoutCounter((previousState) => {
      return { counter: previousState.counter + 1 };
    });*/
    handleOk();
  };
  useEffect(() => {
    //fetchSections();
    const unsubscribe = db.collection(name).doc(workout.workoutName)
      .collection("Sections").onSnapshot(snapshot => {
        const dataArr = [];
        snapshot.forEach(doc => dataArr.push({...doc.data()}))
        setSections(dataArr)
      })
    return unsubscribe
  }, []);

  return (
    <>
      <div style={{ margin: " 5px 0" }}>
        <Tooltip title="Add">
          <Button
            onClick={showModal}
            type="primary"
            icon={<PlusOutlined />}
            size="small"
          >
            Section
          </Button>
        </Tooltip>
      </div>
      {sections.reverse().map((section) => (
        <Section
          name={name}
          workout={workout}
          setUpdateWorkoutCounter={setUpdateWorkoutCounter}
          sections={section}
        />
      ))}

      <Modal
        title="Add a section of the workout"
        visible={sectionModalState.visible}
        onOk={addSections}
        onCancel={handleCancel}
      >
        <SectionForm
          setUpdateWorkoutCounter={setUpdateWorkoutCounter}
          sectionFormState={sectionFormState}
          setSectionFormState={setSectionFormState}
        />
      </Modal>
    </>
  );
}
