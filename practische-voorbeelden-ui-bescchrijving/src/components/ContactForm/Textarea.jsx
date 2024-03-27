import './Textarea.css'

export default function Textarea({ label, name, id, placeholder, error }) {
    return (
        <div className="textarea">
            <label className="textarea-label">{label}
                <textarea className="textarea-input" name={name} id={id} placeholder={placeholder}></textarea>
                <span className="textarea-labelspan">{error}</span>
            </label>
        </div>
    )
}