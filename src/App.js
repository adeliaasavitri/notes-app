import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onEditNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(searchNote.toLowerCase())
        )}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
        handleSearchNote={setSearchNote}
      />
      <Main activeNote={getActiveNote()} onEditNote={onEditNote} />
    </div>
  );
}

export default App;
