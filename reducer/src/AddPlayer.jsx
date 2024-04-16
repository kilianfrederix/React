import { useState } from "react"

export default function AddPlayer({ onAdd }) {
    const [input, setInput] = useState('')
    const isDisabled = input.length === 0

    const handleOnClick = () => {
        onAdd(input)
        setInput('')
    }

    return (
        <>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='name'
            />
            <button
                onClick={handleOnClick}
                disabled={isDisabled}
                type="button">Add Player
            </button>
        </>
    )
}