import React, { useState } from "react";
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
 
  const [loading, setLoading] = useState(false);

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
            style={{ margin: "0 0.5rem" }}
          >
            <Card onClick={() => setLoading(false)} loading={loading} hoverable title={day} bordered style={{ width: "10rem" }}>
              <Day setLoading={setLoading} key={day} name={day} />
            </Card>
            
          </Col>
        ))}
      </Row>
    </div>
  );
}

/*  */
