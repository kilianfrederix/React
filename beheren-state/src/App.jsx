import Toolbar from './Toolbar.jsx'
import ButtonNotes from './ButtonNotes.jsx';
import ButtonFavorites from './ButtonFavorites.jsx';
import { useReducer, useState } from 'react';
import NotesList from './NotesList.jsx';




function App() {
  const [Notes, setNotes] = useState([])


  const handleAddNotes = () => {
    const addNotes = { id: crypto.randomUUID(), content: "" }
    setNotes([...Notes, addNotes])
  }

  return (
    <div id="app">

      <Toolbar onAdd={handleAddNotes} />

      <div id="notes-list">
        <div id="list-header">
          <h2>Notes</h2>
          <div class="btn-group btn-group-justified">
            {/* voeg "active" class for actieve knop */}
            <ButtonNotes />

            <ButtonFavorites />
          </div>
        </div>
        <div class="container">
          <NotesList />
        </div>
      </div>
      <div id="note-editor">
        <textarea placeholder="Nieuwe notitie" class="form-control" value=""></textarea>
      </div>
    </div>
  );
}

export default App;
