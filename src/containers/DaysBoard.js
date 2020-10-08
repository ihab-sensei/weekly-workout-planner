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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {DAYS.map((day) => (
          <Col
            xs={16}
            sm={10}
            md={8}
            lg={6}
            xl={3}
            style={{ marginLeft: "1.1rem" }}
          >
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
