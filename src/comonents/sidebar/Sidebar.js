import React from "react";
import "./Sidebar.css";
import { Category, Chaabi, Game, Location, TicketStar } from "../../assets";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="side-top-card">
          <div className="side-top"><img src={Chaabi} alt="chaabi"/></div>
        </div>
        <div className="side-menu">
          <ul>
            <li className="mainhead hovering">
              <img className="category" src={Category} alt="category" />
              <p className="side-para-top"> Dashboard</p>
            </li>
            <li className="hovering">
              <img className="category" src={Game} alt="category" />
              <p className="side-para">Trainings</p>
            </li>
            <li className="hovering">
              <img className="category" src={TicketStar} alt="category" />
              <p className="side-para">Users</p>
            </li>
            <li className="hovering">
              <img className="category" src={Location} alt="category" />
              <p className="side-para">Analytics</p>
            </li>
            <li className="hovering">
              <img className="category" src={Location} alt="category" />
              <p className="side-para">My Account</p>
            </li>
            <li className="hovering">
              <img className="category" src={Location} alt="category" />
              <p className="side-para">Support</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
