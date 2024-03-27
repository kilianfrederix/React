import './Voorwaarden.css'

export default function Voorwaarden({ label, type, name, id, error }) {
    return (
        <div className="Voorwaarden">
            <input className='Voorwaarden-input' type={type} name={name} id={id} />
            <label className='Voorwaarden-label'>{label}</label>
        </div>
    )
}