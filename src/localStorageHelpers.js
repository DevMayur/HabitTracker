// src/localStorageHelpers.js
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("habitTrackerState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("habitTrackerState", serializedState);
    } catch (err) {
        console.error("Failed to save state to local storage:", err);
    }
};
