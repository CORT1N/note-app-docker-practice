import React from 'react';

const Note = ({ note, deleteNote }) => {
  return (
    <li>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Supprimer</button>
    </li>
  );
};

export default Note;
