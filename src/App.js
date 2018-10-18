import React, { Component } from "react";
import PocChart from "./components/pocChart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <PocChart />
      </div>
    );
  }
}

export default App;
