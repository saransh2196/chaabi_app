import React from "react";
import "./Header.css";
import { SmallFrame } from "../smallframe/SmallFrame";
import { Bargraph } from "../bargraph/Bargraph";
import { Bargraph2 } from "../bargraph/Bargraph2";
import { DonutChart } from "../charts/DonutChart";
import { DoubleDonut } from "../charts/DoubleDonut";
import { SelectCard } from "../select-card/SelectCard";

export const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="top-name">
          <h2 id="main">Hello, Puneet Dhiman</h2>
          <h2 id="second">
            following is your organization's performance summary
          </h2>
        </div>
      </div>
      <div className="body">
        <SmallFrame />
        <SmallFrame />
        <SmallFrame />
        <SmallFrame />
      </div>
      <div className="second-row">
        <div className="piechart-main">
          <div className="double-donut-para"><h2>Chapter Wise Status</h2></div>
          <DoubleDonut />
        </div>
        <div className="bargraph-main">
          <div
            className="bar-para"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <h2>Last 14 days active workers in training</h2>
            <h2>Last 14 days</h2>
          </div>

          <Bargraph />
        </div>
      </div>
      <div className="third-row">
        <div className="list-1">
          <SelectCard/>
        </div>
        <div className="piechart">
          <div className="pie-para" style={{margin:"10px"}}><h2>Quiz Passing %</h2></div>
          <DonutChart />
        </div>
        <div className="bargraph-2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
            }}
          >
            <h2>Daily training completions</h2>
            <h2>Last 7 Days</h2>
          </div>
          <Bargraph2 />
        </div>
      </div>
    </div>
  );
};
