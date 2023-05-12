// src/redux/reducers/habits.js
const initialState = {
    habits: [],
};

const habitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_HABIT":
            return {
                ...state,
                habits: [
                    ...state.habits,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        dailyStatus: {},
                    },
                ],
            };

        case "UPDATE_HABIT_STATUS":
            return {
                ...state,
                habits: state.habits.map(habit =>
                    habit.id === action.payload.id
                        ? {
                              ...habit,
                              dailyStatus: {
                                  ...habit.dailyStatus,
                                  [action.payload.date]: action.payload.status,
                              },
                          }
                        : habit
                ),
            };

        case "REMOVE_HABIT":
            return {
                ...state,
                habits: state.habits.filter(
                    habit => habit.id !== action.payload
                ),
            };

        default:
            return state;
    }
};

export default habitsReducer;
