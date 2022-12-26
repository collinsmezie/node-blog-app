import React from "react";
// import jumpy from "../images/jumpy.gif";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6957628/pexels-photo-6957628.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="single post"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/13544084/pexels-photo-13544084.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="user"
            className="userImage"
          />
          <div className="info">
            <span className="username">John</span>
            <p>Posted 2 days ago</p>
          </div>
        </div>
      </div>
      <div className="menu ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id distinctio
        laboriosam amet quis voluptates architecto mollitia sit. Eos quam at
        officia aliquam consequatur, iusto soluta consectetur facilis animi
        praesentium voluptatum!
      </div>
    </div>
  );
};

export default Single;
