import './Button.css'

export default function Button({ type, text }) {
    return (
        <button
            className="Button"
            type={type}
        >
            {text}
        </button>
    )
}