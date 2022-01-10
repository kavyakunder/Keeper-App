import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
import InitialBackground from "./InitialBackground";
function App() {
  const [notes, setNotes] = useState([]);
  // var isLoggedIn = true;

  const [display, setDisplay] = useState(true);

  function addNote(newNote) {
    setDisplay(false);
    setNotes((previousNote) => {
      return [...previousNote, newNote];
    });
    console.log(newNote);
  }

  function deleteNote(id) {
    console.log("deleted");
    setNotes((previousNote) => {
      return previousNote.filter((theNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {display?<h1>Hello</h1>:({notes.map((theNote, index) => {
            return (
          <Note
            key={index}
            id={index}
            title={theNote.title}
            content={theNote.content}
            onDelete={deleteNote}
          />
        );
      })})} */}
      {display ? <InitialBackground /> : null}
      {notes.map((theNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={theNote.title}
            content={theNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
