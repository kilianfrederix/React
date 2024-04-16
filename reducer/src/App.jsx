import './App.css';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import { useReducer, useState } from 'react';
import playersReducer from './playersReducer';

const initialPlayers = [
  { id: crypto.randomUUID(), name: 'Player 1', score: 0 },
  { id: crypto.randomUUID(), name: 'Player 2', score: 0 }
]

function App() {

  const [Players, dispatch] = useReducer(playersReducer, initialPlayers)

  const handleAddPlayer = (name) => dispatch({ type: 'addPlayer', name })
  const handleAddScore = (id) => dispatch({ type: 'addScore', id })
  const handleDeletePlayer = (id) => dispatch({ type: 'deletePlayer', id })

  return (
    <div className='App'>
      <AddPlayer onAdd={handleAddPlayer} />

      <hr />

      <PlayerList
        onAddScore={handleAddScore}
        onDelete={handleDeletePlayer}
        players={Players}
      />
    </div>
  );
}

export default App;
