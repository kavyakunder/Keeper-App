import React from "react";
import { useState } from "react";
// import GrAdd from
// import { GrAdd } from "react-icons/fa";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setNewNote((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    console.log("Note submitted!");
    props.onAdd(newNote);
    event.preventDefault();
    setNewNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={changeHandler}
          value={newNote.title}
        ></input>
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button style={{ fontSize: "30px" }} onClick={submitNote}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
