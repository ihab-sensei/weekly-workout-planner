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
      <Menu.Item>Default</Menu.Item>
      <Menu.Item>Completed</Menu.Item>
      <Menu.Item>Incomplete</Menu.Item>
    </Menu>
  );

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
            <Card hoverable title={day} bordered style={{ width: "10rem" }}>
              <Day key={day} filter={filter} name={day} />
            </Card>
          </Col>
        ))}
      </Row>
      {/* <div>
        <Dropdown overlay={menu}>
          Sort by <DownOutlined />
        </Dropdown>
      </div> */}
    </div>
  );
}

/* import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
  
      
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
  </Dropdown>,
  mountNode,
);
bottomLeftbottomCenterbottomRight */
