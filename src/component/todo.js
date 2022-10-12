import React from "react";
import todo from "../Images/todo.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="logo" />

            <figcaption>Add Your List Here ✌✌</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="📝 Add Items..." />
            {/* <i className="fa-solid fa-plus add-btn" title="Add Item"></i> */}
            <FontAwesomeIcon
              icon={faPlus}
              className="fa fa-plus add-btn"
              title="Add Item"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
