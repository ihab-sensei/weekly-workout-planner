import React from "react";
import {
  Menu,
  Dropdown,
  Typography,
  Collapse,
  Space,
  Button,
  Tooltip
} from "antd";
import db from "../firebaseConfig";
import { EditOutlined, DeleteOutlined, MoreOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function Section({
  sections,
  name,
  workout,
  setUpdateWorkoutCounter
}) {
  const deleteSection = () => {
    db.collection(name)
      .doc(workout.workoutName)
      .collection("Sections")
      .doc(sections.sectionName)
      .delete()
      .then(() => {
        setUpdateWorkoutCounter((previousState) => {
          return { counter: previousState.counter + 1 };
        });
        console.log("Document successfully deleted!");
      })
      .catch((err) => {
        console.error("Error removing document: ", err);
      });
  };
  const deleteExtraButton = () => {
    return (
      <Tooltip title="Delete">
        <Button
          danger={true}
          onClick={(e) => {
            deleteSection();
            e.stopPropagation();
          }}
          type="text"
          shape="circle"
          icon={<MoreOutlined />}
        />
      </Tooltip>
    );
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" DeleteOutlined>
        {deleteExtraButton()}
      </Menu.Item>
      <Menu.Item key="2" DeleteOutlined>
        Edit
      </Menu.Item>
    </Menu>
  );

  const menuExtraButton = () => {
    return <Dropdown overlay={menu}></Dropdown>;
  };

  return (
    <>
      <Collapse>
        <Panel
          style={{ margin: " 5px 0" }}
          extra={menuExtraButton()}
          header={sections.sectionName}
        >
          <Text>{sections.sectionDescription}</Text>
        </Panel>
      </Collapse>
    </>
  );
}
