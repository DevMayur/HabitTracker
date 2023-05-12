// src/redux/actions/habitActions.js
export const addHabit = habit => {
    return {
        type: "ADD_HABIT",
        payload: habit,
    };
};

export const updateHabitStatus = (id, date, status) => {
    return {
        type: "UPDATE_HABIT_STATUS",
        payload: { id, date, status },
    };
};

export const removeHabit = id => {
    return {
        type: "REMOVE_HABIT",
        payload: id,
    };
};
