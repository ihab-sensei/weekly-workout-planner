import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;
export default function Home() {
  return (
    <div>
      <Title style={{textAlign:"center"}}>Welcome To Weekly Workout Planner</Title>
      <Title type="secondary" level={2}>Do You Even Lift Bro?! </Title>
      <Text>Sup, bro? Lifting the heavy weights huh? Good for you. What's that? Are you still using pen and paper to plan your workouts brah? 
        <br/>
        <br/>
        Well, you are in luck because the WWP(WeeklyWorkoutPlanner) is here! Now, ditch that old book and go to board tab!
      </Text>
    </div>
  );
}
