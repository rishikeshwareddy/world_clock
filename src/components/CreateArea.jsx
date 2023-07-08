import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    city: "",
    country: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      city: "",
      country: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="city"
          onChange={handleChange}
          value={note.city}
          placeholder="city"
        />
        <input 
          name="country"
          onChange={handleChange}
          value={note.country}
          placeholder="country"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
