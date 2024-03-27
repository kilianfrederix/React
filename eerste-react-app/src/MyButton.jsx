import "./MyButton.css"
import { useState } from "react";

export default function MyButton({ buttonText, color }) {
    const buttonStyle = { backgroundColor: color };
    const [count, setcount] = useState(0)
    const handleClick = () => setcount(count + 1);

    // function handleClick() {
    //     alert("you clicked me!")
    // };



    return (                            // return moet met ronde haakjes getyped worden
        <button onClick={handleClick} className="button" style={buttonStyle}> {buttonText} ({count})</button>

    )
}