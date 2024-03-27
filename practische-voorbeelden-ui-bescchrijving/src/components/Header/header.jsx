import './Header.css'

export default function Header({ title, subtitle }) {
    return (
        <header className='Title'>
            <h2 className='title'>{title}</h2>
            {subtitle && (
                <p className='subtitle'>{subtitle}</p>
            )}
        </header>
    )
}