import React, { useState } from "react";

function CreateArea(props) {
  const [singleNote, setSingleNote] = useState({ title: "", content: "" });

  function noteChange(event) {
    const { name, value } = event.target;
    setSingleNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    //console.log(event.target.value)
    console.log(singleNote);
  }

  function prevention(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={prevention}>
        <input
          onChange={noteChange}
          name="title"
          placeholder="Title"
          value={singleNote.title}
        />
        <textarea
          onChange={noteChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={singleNote.content}
        />
        <button
          onClick={() => {
            if (singleNote.title !== "" && singleNote.content !== "")
              props.onAdd(singleNote);
            setSingleNote({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
