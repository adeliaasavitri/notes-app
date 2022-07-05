import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Main({activeNote, onEditNote, handleDarkMode}) {
    const onEditField = (key, value) => {
        onEditNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        });
    };

    if(!activeNote){
    return(
        <div className="no-active-note">No note selected</div>
    );}

    return(
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" onChange={(event) => onEditField("title", event.target.value)} id="title" value={activeNote.title} autoFocus/>
                <textarea id="body" onChange={(event) => onEditField("body", event.target.value)} placeholder="Write your thoughts here..." value={activeNote.body}/>
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
            </div>
        </div>
    );
};

