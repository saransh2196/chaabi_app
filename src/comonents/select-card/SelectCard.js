import React from "react";
import "./selectcard.css";
import { ArrowUp } from "../../assets";

export const SelectCard = () => {
  return (
    <div>
      <div className="cardtitle">
        <p>Monthly Training Activity</p>
      </div>
      <div className="secondrow-1">
        <img src={ArrowUp} />
        <p>16% more enrollees this month</p>
      </div>

      <div
        className="radiomain"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="divs">
          <div className="radios" style={{ display: "flex" }}>
            <input type="radio" value="course a" name="a" />{" "}
            <span>course a</span>
          </div>
          <p>23 workers took this course this week</p>
        </div>
        <div className="divs">
          <div className="radios" style={{ display: "flex" }}>
            <input type="radio" value="course b" name="a" />{" "}
            <span>course b</span>
          </div>
          <p>253 workers took this course this week</p>
        </div>
        <div className="divs">
          <div className="radios" style={{ display: "flex" }}>
            <input type="radio" value="course c" name="a" />{" "}
            <span>course c</span>
          </div>
          <p>253 workers took this course this week</p>
        </div>
        <div className="divs">
          <div className="radios" style={{ display: "flex" }}>
            <input type="radio" value="course d" name="a" />{" "}
            <span>course d</span>
          </div>
          <p>253 workers took this course this week</p>
        </div>
      </div>
    </div>
  );
};
