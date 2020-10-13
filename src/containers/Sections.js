import React, { useEffect, useState } from "react";
import SectionForm from "../components/SectionForm";
import db from "../firebaseConfig";
import Section from "../components/Section";
import { Tooltip, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function Sections({ workout, name }) {
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
    db.collection(name).doc(workout.docId).collection("Sections").add({
      sectionName: sectionFormState.sectionName,
      sectionDescription: sectionFormState.sectionDescription
    });
    handleOk();
  };
  useEffect(() => {
    const unsubscribe = db
      .collection(name)
      .doc(workout.docId)
      .collection("Sections")
      .onSnapshot((snapshot) => {
        console.log("snap", snapshot);
        const dataArr = [];
        snapshot.forEach((doc) =>
          dataArr.push({ ...doc.data(), docId: doc.id })
        );
        setSections(dataArr);
      });
    return unsubscribe;
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
          key={sections.docId}
          name={name}
          workout={workout}
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
          sectionFormState={sectionFormState}
          setSectionFormState={setSectionFormState}
        />
      </Modal>
    </>
  );
}
