import React, { useState } from "react";
import Day from "./Day";
import "./style.css";
import { Card, Col, Row, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function DaysBoard() {
  const [filter, setFilter] = useState("default");

  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const menu = (
    <Menu>
      <Menu.Item key="1">Default</Menu.Item>
      <Menu.Item key="2">Completed</Menu.Item>
      <Menu.Item key="3">Incomplete</Menu.Item>
    </Menu>
  );

  return (
    <div>
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
            <Card hoverable title={day} bordered style={{ width: "10rem" }}>
              <Day key={day} filter={filter} name={day} />
            </Card>
          </Col>
        ))}
      </Row>
      </div>

      <div>
      <Dropdown overlay={menu} trigger={['hover']}>
      < > 
      Sort by <DownOutlined />
      </>
    </Dropdown>

       
    </div>
    </div>
   
  
  
  );
}

