import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function CategeoryList({ title, sub, Categeory, bg }) {
  const subToDisplay = sub.slice(0, 3);
  return (
    <div className="container">
      <div className="row space">
        <div className="col-sm-6">
          <div className="heading">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="view">
            <Link
              to={`/ViewAll/${encodeURIComponent(title)}/${encodeURIComponent(
                bg
              )}`}
            >
              View All
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="row">
        {subToDisplay.map((item) => (
          <div className="col-sm-4">
            <div className="item-box">
              <Link to="/Service">
                <img src={item.img} alt="images" />
              </Link>
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategeoryList;
