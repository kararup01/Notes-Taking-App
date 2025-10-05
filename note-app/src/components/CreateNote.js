import { useState } from "react";
import { v4 as uuid } from 'uuid';

const CreateNote = ({ handleAddNotes }) => {

  const [text, setText] = useState();

  const handleTextChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const handleClickBtn = () => {
    let newNote = {
      id: uuid(),
      text: text,
    }
    handleAddNotes(newNote);
    setText('');
  }

  return (
    <>
      <div className="note">
        <div className="create-note">
          <textarea rows={5} col="10" placeholder="Type...." value={text} onChange={handleTextChange}></textarea>
          <div className="note-footer">
            <span>Left</span>
            <button className="save-btn" onClick={handleClickBtn}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default CreateNote;   