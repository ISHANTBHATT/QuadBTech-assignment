import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";


function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
    completed: false
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      completed: false
    });
    event.preventDefault();
  }

  function expand() {
    setIsExpanded("true");
  }

  return (
    <div>
      <form className="relative w-1/2 mx-auto my-6 bg-white p-4 rounded-lg shadow-md">
        {isExpanded ? (
          <input
            className="w-full border border-none p-1 outline-none text-lg resize-none"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          className="w-full border border-none p-1 outline-none text-lg resize-none"
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
      <div in={isExpanded}>
        <button onClick={submitNote} className="absolute right-4 bottom-4 bg-yellow-400 text-white rounded-full w-9 h-9 shadow-md cursor-pointer outline-none flex items-center justify-center">
          <IoMdAdd className="w-6 h-6" />
        </button>
      </div>

      </form>
    </div>
  );
}

export default CreateArea;
