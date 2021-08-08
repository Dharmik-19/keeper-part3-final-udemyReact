import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [mainList, setMainList] = useState([]);

  function listAppend(newItem) {
    setMainList((prevValue) => {
      //return [...prevValue, newItem];
      return [...prevValue, newItem];
    });
    //setSingleNote({ title: "", content: "" });
    console.log(mainList);
  }

  function deleteNote(id) {
    // setMainList.filter((entry, index) => {
    //   return index!==id;
    // })

    setMainList((prevItems) => {
      return prevItems.filter((value, index) => {
        return index !== id;
      });
    });
    //console.log(id);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={listAppend} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {mainList.map((entry, index) => (
        <Note
          key={index}
          id={index}
          title={entry.title}
          content={entry.content}
          deletion={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
