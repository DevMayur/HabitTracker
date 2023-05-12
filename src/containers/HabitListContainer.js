// src/containers/HabitListContainer.js
import React from "react";
import { connect } from "react-redux";
import { updateHabitStatus, removeHabit } from "../redux/actions/habitActions";
import HabitList from "../components/HabitList";

const HabitListContainer = ({ habits, updateHabitStatus, removeHabit }) => {
    return (
        <div>
            <HabitList
                habits={habits}
                updateHabitStatus={updateHabitStatus}
                removeHabit={removeHabit}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        habits: state.habits.habits,
    };
};

export default connect(mapStateToProps, { updateHabitStatus, removeHabit })(
    HabitListContainer
);
