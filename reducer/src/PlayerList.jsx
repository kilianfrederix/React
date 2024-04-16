import Player from "./Player"


export default function PlayerList({ players, onAddScore, onDelete }) {
    return (
        <ul>
            {players.map(player => (
                <Player
                    onAddScore={onAddScore}
                    onDelete={onDelete}
                    key={player.id}
                    player={player}
                />
            ))}
        </ul>
    )
}