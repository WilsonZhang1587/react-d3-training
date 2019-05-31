import React, { Component } from "react";
import d3_1 from "../containers/d3_1";
import d3_2 from "../containers/d3_2";
import d3_3 from "../containers/d3_3";
import "./Html_1.css";

export default class html_1 extends Component {
  componentDidMount() {
    d3_1();
    d3_2();
  }
  render() {
    return (
      <div>
        <div id="dashboard">
          <p>Earnings</p>
          <div className="chart" />
        </div>
        <div className="txt">
          <h1 />
        </div>
        <div className="dataSet" />
        <div className="svgBar">
          <svg />
        </div>
      </div>
    );
  }
}
