import React, { useState } from "react";
import StudentList from "./StudentList";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [students, setStudents] = useState([]);

    const addStudent = (studentName) => {
        if (studentName.trim() !== "") {
            const newStudent = {
                id: uuidv4(),
                name: studentName,
            };
            setStudents([...students, newStudent]);
        }
    };

    const deleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    const editStudent = (id, newName) => {
        setStudents(
            students.map((student) =>
                student.id === id ? { ...student, name: newName } : student
            )
        );
    };

    return (
        <div>
            <div>
                <h1>Studenten in mijn klas</h1>
                <Input
                    placeholder="New Student"
                    type="text"
                    name="addStudent"
                    id="Student"
                    onAddStudent={addStudent}
                />
            </div>
            {students.length === 0 ? (
                <p>er zijn geen studenten.</p>
            ) : (
                <ul>
                    {students.map((student) => (
                        <StudentList
                            key={student.id}
                            student={student}
                            onDeleteStudent={deleteStudent}
                            onEditStudent={editStudent}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;



