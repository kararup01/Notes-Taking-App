import { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Notes = () => {

  const [notes, setNotes] = useState(() => {
    let Data = JSON.parse(localStorage.getItem('myData'));
    return Data || [];
  });

  const addNotes = (newNote) => {
    setNotes((prevState) => [...prevState, newNote]);
  };

  const deleteNotes = (id) => {
    setNotes(
      notes.filter((item) => item.id !== id)
    )
  };

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(notes));
  });

  return (
    <>
      <div className="notes">
        {notes.map((item) => (
          <Note key={item.id} item={item} handleDelete={deleteNotes} />
        ))}

        <CreateNote handleAddNotes={addNotes} />
      </div>
    </>
  )
};

export default Notes;

// const DEFAULT_NOTES = [
//   {
//     id: '001',
//     text: "I have learn react.js in 20 days",
//   },
//   {
//     id: '002',
//     text: "I have learn next.js in 20 days",
//   },
// ];