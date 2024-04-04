import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, toggleCompletion } from "./redux/action";
import Header from "./components/header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const handleAddNote = (newNote) => {
    dispatch(addNote(newNote));
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const handleToggleCompletion = (id) => {
    dispatch(toggleCompletion(id));
  };

  return (
    <div className="bg-primary">
      <Header />
      <CreateArea onAdd={handleAddNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          completed={note.completed}
          onDelete={handleDeleteNote}
          onToggle={handleToggleCompletion}
        />
      ))}
    </div>
  );
}

export default App;
