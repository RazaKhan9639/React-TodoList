import React from "react";
import todo from "../Images/todo.jpg";
import "../App.css";
const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="logo" />

            <figcaption>Add Your List Here ✌✌</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Todo;
