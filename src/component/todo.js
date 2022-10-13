import React, { useState } from "react";
import todo from "../Images/todo.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="logo" />

            <figcaption>Add Your List Here ✌✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="📝 Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faPlus}
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></FontAwesomeIcon>
          </div>
          <div className="showItems">
            {items.map((curElem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{curElem}</h3>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  ></FontAwesomeIcon>
                </div>
              );
            })}
          </div>

          {/* clear all button */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
