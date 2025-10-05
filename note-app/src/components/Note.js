const Note = ({ item, handleDelete }) => {

  return (
    <>
      <div className="note">
        <div>{item.text}</div>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    </>
  )
};

export default Note;