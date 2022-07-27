import React from "react";
import "./naav.css";

export default function Naav(props) {
  return (
    <div className="nav">
      <div className="navbar">
        <img className="nav-img" src="./images/Group 1.png" alt="" />
        <ul className="navbar-lists">
          <li className="nabbar-lists-list">Home</li>
          <li className="nabbar-lists-list">services</li>
          <li className="nabbar-lists-list">products</li>
          <li className="nabbar-lists-list">about</li>
          <li className="nabbar-lists-list">contacts us</li>
        </ul>
        <button className="navbar-btn"onClick={props.handleClick}>
          <i class="fa-regular fa-moon"></i>
        </button>
      </div>
    </div>
  );
}
