// src/components/HabitForm.js
import React, { useState } from "react";

const HabitForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit({ id: Date.now(), title, completed: false });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new habit"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default HabitForm;
