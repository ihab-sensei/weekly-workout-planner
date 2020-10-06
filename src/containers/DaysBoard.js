import React from "react";
import Day from "./Day";
import "./style.css";
import { Card, Col, Row } from "antd";

export default function DaysBoard() {
  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {DAYS.map((day) => (
          <Col span={3} style={{ marginLeft: "1.1rem" }}>
            <Card hoverable title={day} bordered style={{ width: "10.5rem" }}>
              <Day key={day} name={day} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

/*  */
