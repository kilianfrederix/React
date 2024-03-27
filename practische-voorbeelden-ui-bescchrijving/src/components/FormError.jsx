import './FormError.css'

export default function FormError({ error }) {
    return (
        <span className="FormError">
            {error}
        </span>
    )
}