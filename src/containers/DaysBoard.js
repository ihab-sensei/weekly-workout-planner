import React, { useState } from "react";
import Day from "./Day";
import "./style.css";
import { Card, Col, Row, Menu, Dropdown, Button, Tooltip } from "antd";
import { DownOutlined, CheckCircleFilled } from "@ant-design/icons";



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

  const handleSortClick = ({key}) => {
    console.log(key)
    setFilter(key)
    console.log(filter)
   
  }

  const menu = (
    <Menu onClick={handleSortClick}>
      <Menu.Item  key="default">Default</Menu.Item>
      <Menu.Item  key="completed">Completed</Menu.Item>
      <Menu.Item  key="incomplete">Incomplete</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div style={{float: "right"}}>
       <Tooltip title="Mark this week complete">
       
      <Button type="primary" shape="circle" icon={<CheckCircleFilled />} />
    </Tooltip>
    </div>
       <div>
      <Dropdown overlay={menu} >
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Sort by <DownOutlined />
    </a>
     
    </Dropdown>

       
    </div>
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

     
    </div>
   
  
  
  );
}

