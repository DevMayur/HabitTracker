// src/dateHelpers.js
export const getLast7Days = () => {
    const result = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        result.push(date.toISOString().substring(0, 10));
    }
    return result;
};

// src/dateHelpers.js
export const removeOldData = data => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const filteredData = {};

    for (const date in data) {
        if (new Date(date) >= sevenDaysAgo) {
            filteredData[date] = data[date];
        }
    }

    return filteredData;
};
