import React from "react";
import { Typography, Space, Image, Row, Col, Divider } from "antd";
import { FALLBACK_IMG, SPONGEBOB_ARM } from "../Images";

const { Title, Text } = Typography;

export default function About() {
  const flex = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };

  const renderImg = () => {
    return (
      <Image
        style={{ margin: "1rem" }}
        width={300}
        height={200}
        src={SPONGEBOB_ARM}
        fallback={FALLBACK_IMG}
      />
    );
  };
  return (
    <div style={flex}>
      <div>
        <Space direction="vertical">
          <div>
            <Title>About Weekly-Workout-Planner</Title>
            <Text>
              Sup' Bro! You want to learn more about this website! Cool! <br />
              <br />
              This website is designed by ThiccBois to help plan your workouts
              bruh; You can add the workouts you want to do and you can add the
              section names too. Sick, right ?! Anyway, the dudes who designed
              this website care about ease of use, so you can easily use it
              (duh!?), without training. Keep on rockin' that tank top, No pain,
              no gain etc. !
            </Text>
          </div>
        </Space>
      </div>

      <div>{renderImg()}</div>
    </div>
  );
}
