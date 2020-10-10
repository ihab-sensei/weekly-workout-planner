import React from "react";
import { Typography, Space } from "antd";

const { Title, Text } = Typography;

export default function About() {
  return (
    <Space direction="vertical">
      <Title>About Weekly-Workout-Planner</Title>
      <Text>
        Sup' Bro! You want to learn more about this website! Cool! <br/>
        This website is designed by ThiccBois to help plan your workouts bruh;
        You can add the workouts you want to do and you can add the section names too.
        Sick, right ?! Anyway, the dudes who designed this website care about ease of
        use, so you can easily use it (duh!?), without training. Keep on rockin' that tank top,
        No pain, no gain etc. !
      </Text>
    </Space>
  );
}
