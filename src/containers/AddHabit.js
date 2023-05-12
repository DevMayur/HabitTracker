import React from "react";
import { connect } from "react-redux";
import { addHabit } from "../redux/actions/habitActions";
import HabitForm from "../components/HabitForm";

const AddHabit = ({ addHabit }) => {
    return (
        <div>
            <HabitForm onSubmit={addHabit} />
        </div>
    );
};

export default connect(null, { addHabit })(AddHabit);
