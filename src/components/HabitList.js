// src/components/HabitList.js
import React from "react";
import Habit from "./Habit";

const HabitList = ({ habits, updateHabitStatus, removeHabit }) => {
    return (
        <div>
            {habits.map(habit => (
                <Habit
                    key={habit.id}
                    habit={habit}
                    updateHabitStatus={updateHabitStatus}
                    removeHabit={removeHabit}
                />
            ))}
        </div>
    );
};

export default HabitList;
