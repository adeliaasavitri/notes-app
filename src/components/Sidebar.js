import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MdSearch, MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  handleSearchNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes!</h1>
        <MdAddCircleOutline
          className="add-icon"
          onClick={onAddNote}
          size="25px"
        />
      </div>
      <div className="search">
        <MdSearch className="search-icons" size="1.3rem" />
        <input
          onChange={(e) => handleSearchNote(e.target.value)}
          type="text"
          placeholder="Search title..."
        />
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <MdDeleteOutline
                className="delete-icon"
                onClick={() => onDeleteNote(note.id)}
                size="25px"
              />
            </div>
            <ReactMarkdown>
              {note.body && note.body.substr(0, 100) + "..."}
            </ReactMarkdown>
            <small className="note-meta">
              {" "}
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-HK", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
