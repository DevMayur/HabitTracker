// src/components/Habit.js
import React from "react";
import { getLast7Days } from "../dateHelpers";
import "./Habit.css";

const Habit = ({ habit, updateHabitStatus, removeHabit }) => {
    const last7Days = getLast7Days();

    const handleStatusChange = (date, status) => {
        updateHabitStatus(habit.id, date, status);
    };

    return (
        <div className="card">
            <div className="card-header">{habit.title}</div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {last7Days.map(date => (
                                <th key={date}>{date}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {last7Days.map(date => {
                                const dailyStatus =
                                    habit.dailyStatus[date] || "None";
                                return (
                                    <td key={date}>
                                        <select
                                            className="form-select"
                                            value={dailyStatus}
                                            onChange={e =>
                                                handleStatusChange(
                                                    date,
                                                    e.target.value
                                                )
                                            }>
                                            <option value="Done">Done</option>
                                            <option value="Not done">
                                                Not done
                                            </option>
                                            <option value="None">None</option>
                                        </select>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
                <button
                    className="btn btn-danger btn-sm remove-button"
                    onClick={() => removeHabit(habit.id)}>
                    Remove Habit
                </button>
            </div>
        </div>
    );
};

export default Habit;
