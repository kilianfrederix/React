import React, { useState } from "react";
import Button from "./Button";

export default function StudentList({ student, onDeleteStudent, onEditStudent }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(student.name);

    const handleEdit = () => {
        setIsEditing(true);
        setNewName(student.name);
    };

    const handleSaveEdit = () => {
        const NewStudent = newName.trim();
        if (NewStudent !== "") {
            onEditStudent(student.id, NewStudent);
            setIsEditing(false);
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                    />
                    <Button onClick={handleSaveEdit}>Save</Button>
                    <Button onClick={handleCancelEdit}>Cancel</Button>
                </div>
            ) : (
                <div>
                    <span>{student.name}</span>
                    <Button onClick={handleEdit}>Edit</Button>
                    <Button onClick={() => onDeleteStudent(student.id)}>Delete</Button>
                </div>
            )}
        </li>
    );
}




