import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import DaysBoard from "./containers/DaysBoard";
import Home from "./components/Home";
import About from "./components/About";
import { Space } from 'antd';


function App() {
  return (
    <Router>
    <div className ="App">
      <Space direction="vertical">
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route path ="/board" component={DaysBoard}/>
      <Route path= "/about" component={About}/>
      </Space>
    </div>
    </Router>
  );
}

export default App;
