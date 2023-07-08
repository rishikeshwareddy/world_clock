import React from "react";

function Note(props) {
  
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.city},{props.country}</h1>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
