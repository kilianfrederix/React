export default function playersReducer(players, action) {
    switch (action.type) {
        case 'addPlayer': {
            return [
                ...players,
                { id: crypto.randomUUID(), score: 0, name: action.name }
            ]
        }

        case 'addScore': {
            return players.map(p => {
                if (p.id === action.id) {
                    return {
                        ...p,
                        score: p.score + 1,
                    }
                }
                return p
            })
        }

        case 'deletePlayer': {
            return players.filter(p => p.id !== action.id)
        }

        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}