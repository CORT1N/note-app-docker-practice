import React, { useState, useEffect } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/api/notes')
      .then(response => response.json())
      .then(data => setNotes(data));
  }, []);

  const addNote = (note) => {
    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    }).then(response => response.json())
      .then(newNote => setNotes([...notes, newNote]));
  };

  const deleteNote = (id) => {
    fetch(`/api/notes/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setNotes(notes.filter(note => note.id !== id));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm addNote={addNote} />
      <ul>
        {notes.map(note => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
