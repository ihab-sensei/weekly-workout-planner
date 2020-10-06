import React from "react";
import Day from "./Day";
import "./style.css";
import { Card, Col, Row } from 'antd';

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
    <div className="containerBoard">
      {DAYS.map((day) => (
        <Day key={day} name={day} />
      ))}
    </div>
  );
}
