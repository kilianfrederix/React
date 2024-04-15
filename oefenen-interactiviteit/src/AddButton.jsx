import React from "react";

const AddButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
        >
            Add Student
        </button>
    );
};

export default AddButton;