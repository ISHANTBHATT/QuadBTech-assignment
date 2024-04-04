import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function toggleCompletion() {
    props.onToggle(props.id);
  }

  return (
    <div className={`flex justify-between bg-white rounded-lg shadow-md p-4 w-64 mb-4 ml-4 float-left ${props.completed ? 'line-through' : ''}`}>
      <div>
      <h1 className="text-lg mb-2">{props.title}</h1>
      <p className="text-base mb-2 whitespace-pre-wrap break-word">{props.content}</p>
      </div>
      <div className="flex flex-col justify-between">
      <label className="items-center cursor-pointer pl-2 pb-4">
        <input
          type="checkbox"
          checked={props.completed}
          onChange={toggleCompletion}
          className="form-checkbox h-5 w-5 text-primary"
        />
      </label>
      <button className=" text-yellow-400 border-none w-9 h-9 p-1 bg-primary cursor-pointer outline-none" onClick={handleClick}>
        <MdDelete className="w-full h-full"/>
      </button>
      </div>

    </div>
  );
}

export default Note;
