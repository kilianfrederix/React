import MyButton from './MyButton'

export default function App() {

    const buttons = [
        { text: 'knop1', color: 'red' },
        { text: 'knop2', color: 'orange' },
        { text: 'knop3', color: 'yellow' },
        { text: 'knop4', color: 'purple' },
        { text: 'knop5', color: 'blue' }
    ]

    const buttonlist = buttons.map(button => <MyButton buttonText={button.text} color={button.color} />)

    // const content = buttons.length ? buttonlist : <p>geen knoppen</p>

    return (                    // in plaats van een div mag je ook een lege element returnen ( <> </> )
        <div>
            <h1>Test</h1>
            {buttons.length === 0 ? <p>geen knoppen</p> : buttonlist}
            {/* {content} */}
        </div>

    )
}

