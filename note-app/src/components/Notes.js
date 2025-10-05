import { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Notes = () => {

  const [notes, setNotes] = useState(DEFAULT_NOTES);

  const addNotes = (newNote) => {
    setNotes(
      [...notes, newNote]
    )
  };

  const deleteNotes = (id) => {
    setNotes(
      notes.filter((item) => item.id !== id)
    )
  };

  return (
    <>
      {notes.map((item) => (
        <Note item={item} handleDelete={deleteNotes} />
      ))}

      <div className="notes">
        <CreateNote handleAddNotes={addNotes} />
      </div>
    </>
  )
};

export default Notes;

const DEFAULT_NOTES = [
  {
    id: '001',
    text: "I have learn react.js in 20 days",
  },
  {
    id: '002',
    text: "I have learn next.js in 20 days",
  },
];