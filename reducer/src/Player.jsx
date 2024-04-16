export default function Player({ player, onAddScore, onDelete }) {
    return (
        <li>
            <div>{player.name}</div>
            <div><b>Score: {player.score}</b></div>

            <button onClick={() => onAddScore(player.id)}>Add Score</button>
            <button onClick={() => onDelete(player.id)}>Delete player</button>
        </li>
    );
}