import React, { useState } from "react";
import AddButton from "./AddButton";

export default function Input({ onAddStudent }) {
    const [studentText, setStudentText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        setStudentText(event.target.value);
        setErrorMessage("");
    };

    const handleAddButtonClick = () => {
        if (studentText.trim() !== "") {
            onAddStudent(studentText.trim());
            setStudentText("");
            setErrorMessage("");
        } else {
            setErrorMessage("Je moet eerst een naam ingeven!");
        }
    };

    const isButtonDisabled = studentText.trim() === "";

    const buttonStyle = {
        cursor: isButtonDisabled ? "not-allowed" : "pointer",
        backgroundColor: isButtonDisabled ? "#ccc" : "#007bff",
        color: "#ffffff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        marginTop: "8px",
    };

    return (
        <div>
            <input
                placeholder="Naam"
                value={studentText}
                onChange={handleInputChange}
                type="text"
                name="addStudent"
                id="Student"
            />
            <AddButton
                onClick={handleAddButtonClick}
                style={buttonStyle}
                disabled={isButtonDisabled}
            >
                Toevoegen
            </AddButton>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
    );
}
