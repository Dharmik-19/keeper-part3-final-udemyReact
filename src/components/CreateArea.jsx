import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [singleNote, setSingleNote] = useState({ title: "", content: "" });

  var [submitConditionally, setSubmitConditionally] = useState(false);
  var textAreaSize = submitConditionally ? 3 : 1;

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

  function conditionalDisplay() {
    setSubmitConditionally(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={prevention}>
        <input
          onChange={noteChange}
          name="title"
          placeholder="Title"
          value={singleNote.title}
          style={{ display: submitConditionally ? "inline" : "none" }}
        />
        <textarea
          onClick={conditionalDisplay}
          onChange={noteChange}
          name="content"
          placeholder="Take a note..."
          rows={textAreaSize}
          value={singleNote.content}
        />
        <Zoom in={submitConditionally}>
          <Fab
            onClick={() => {
              if (singleNote.title !== "" && singleNote.content !== "")
                props.onAdd(singleNote);
              setSingleNote({ title: "", content: "" });
              setSubmitConditionally(false);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
