import React from "react";
import "./Header.css";
import { SmallFrame } from "../smallframe/SmallFrame";
import { Bargraph } from "../bargraph/Bargraph";
import { Bargraph2 } from "../bargraph/Bargraph2";
import { DonutChart } from "../charts/DonutChart";
import { DoubleDonut } from "../charts/DoubleDonut";
import { SelectCard } from "../select-card/SelectCard";
import { Group, GroupRed } from "../../assets";
import { SmallredFrame } from "../smallframe/SmallredFrame";

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
        <SmallFrame
          heading={"In training workers"}
          number={"3543"}
          image={Group}
          num={"234"}
        />
        <SmallredFrame
          heading={"video watch-time"}
          number={"2433"}
          image={GroupRed}
          num={"435"}
        />
        <SmallFrame
          heading={"% workers passing Quiz"}
          number={"95%"}
          image={Group}
          num={"24%"}
        />
        <SmallFrame
          heading={"Avg days taken"}
          number={"6"}
          image={Group}
          num={"3"}
        />
      </div>
      <div className="second-row">
        <div className="piechart-main">
          <div>
            <h2 className="double-donut-para">Chapter Wise Status</h2>
          </div>
          <DoubleDonut />
          <div className="donut-list-main">
            <div className="list-a">
              <div className="row__first">
                <div className="oneblue circle" />
                <p>Finished Training</p>
                <div className="onegrey circle" />
                <p>Chapter A</p>
              </div>
              <div className="row__second">
                <div className="onepurple circle" />
                <p className="parag-2">Chapter B</p>
                <div className="oneblack circle" />
                <p>Chapter C</p>
              </div>
              <div className="row__third">
                <div className="onered circle" />
                <p>Haven't started yet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bargraph-main">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.0rem",
            }}
          >
            <h2 className="bar-para">
              Last 14 days active workers in training
            </h2>
            <h2 className="bar-para">Last 14 days</h2>
          </div>

          <Bargraph />
        </div>
      </div>
      <div className="third-row">
        <div className="list-1">
          <SelectCard />
        </div>
        <div className="piechart">
          <div style={{ margin: "1.0rem" }}>
            <h2 className="pie-para">Quiz Passing %</h2>
          </div>
          <DonutChart />
        </div>
        <div className="bargraph-2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1.0rem",
            }}
          >
            <h2 className="bar2-para">Daily training completions</h2>
            <h2 className="bar2-para">Last 7 Days</h2>
          </div>
          <Bargraph2 />
        </div>
      </div>
    </div>
  );
};
