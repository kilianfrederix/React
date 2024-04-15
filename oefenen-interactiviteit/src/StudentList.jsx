import React from "react";
import Button from "./Button";

export default function StudentList({ student, onDeleteStudent, onEditStudent }) {
    const handleDelete = () => {
        onDeleteStudent(student.id);
    };

    const handleEdit = () => {
        const newName = prompt("Enter new name:", student.name);
        if (newName !== null && newName.trim() !== "") {
            onEditStudent(student.id, newName);
        }
    };

    return (
        <li>
            <span>{student.name}</span>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleEdit}>Edit</Button>
        </li>
    );
}

