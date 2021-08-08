import React from "react";

function Note(props) {
  const id = props.id;

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deletion(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
