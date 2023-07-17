import React from "react";
import {  TrendUpred } from "../../assets";
import "./smallFramered.css";
import "./SmallFrame.css";
export const SmallredFrame = (props) => {
  return (
    <div className="box">
      <div className="main1">
        <div className="heading">
          <p className="smallpara1">{props.heading}</p>
        </div>
        <div className="inside-box">
          <p className="smallpara1">{props.number}</p>
          <img src={props.image} alt="Group" />
        </div>
        <div className="smicon">
          <div className="smalliconred">
            <img src={TrendUpred} alt='red' />
            <p>20%</p>
          </div>
          <p>{props.num}</p>
        </div>
      </div>
    </div>
  );
};
