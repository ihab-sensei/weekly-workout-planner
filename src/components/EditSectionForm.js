import React from "react";
import { Input, Tooltip, TextArea } from "antd";
import { InfoCircleOutlined, FireOutlined } from "@ant-design/icons";

export default function EditSectionForm({
  sectionName,
  sectionDescription,
  setEditSectionFormState,
  editSectionFormState
}) {
  const handleChange = (e) => {
    setEditSectionFormState({
      ...editSectionFormState,
      [e.target.id]: e.target.value
    });
  };
  return (
    <div>
      <Input
        type="text"
        id={sectionName}
        name="sectionName"
        value={editSectionFormState.sectionName}
        onChange={(e) => handleChange(e)}
        placeholder="Edit section name"
        prefix={<FireOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="e.g Warm Up...">
            <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          </Tooltip>
        }
      />
      <TextArea // bug on render
        placeholder="Change section description..."
        id={sectionDescription}
        name="sectionDescription"
        value={editSectionFormState.sectionDescription}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
