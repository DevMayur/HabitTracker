// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddHabit from "./containers/AddHabit";
import HabitListContainer from "./containers/HabitListContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Habit Tracker</h1>
                <AddHabit />
                <HabitListContainer />
            </div>
        </Provider>
    );
}

export default App;
