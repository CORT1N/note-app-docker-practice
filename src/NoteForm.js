import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [content, setContent] = useState('');

  const submitNote = (e) => {
    e.preventDefault();
    addNote({
      content,
      id: Date.now()
    });
    setContent('');
  };

  return (
    <form onSubmit={submitNote}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default NoteForm;
