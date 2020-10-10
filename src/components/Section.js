import React from "react";
import { Typography, Collapse, Space } from "antd";

const { Title, Text } = Typography;
const { Panel } = Collapse;

export default function Section({ sections }) {
  return (
    <>
      {sections.reverse().map((section) => (
        <Collapse>
          <Panel style={{ margin: " 5px 0" }} header={section.sectionName}>
            <Text>{section.sectionDescription}</Text>
          </Panel>
        </Collapse>
      ))}
    </>
  );
}
