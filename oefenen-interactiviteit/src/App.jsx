import './App.css';
import { useState } from 'react';
import StudentList from './StudentList';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique IDs

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (studentName) => {
    if (studentName.trim() !== "") {
      const newStudent = {
        id: uuidv4(), // Use uuidv4 to generate a unique ID
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
        <Input placeholder="New Student" type="text" name="addStudent" id="Student" onAddStudent={addStudent} />
      </div>
      <ul>
        {students.map((student) => (
          <StudentList
            key={student.id} // Use lowercase 'key' instead of 'Key'
            student={student} // Use lowercase 'student' instead of 'Student'
            onDeleteStudent={() => deleteStudent(student.id)}
            onEditStudent={(newName) => editStudent(student.id, newName)} // Pass newName to editStudent
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

