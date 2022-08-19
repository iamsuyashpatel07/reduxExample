export const showName = (data) => {
    return {
        type: "SHOW_NAME",
        payload: {
            data: data,
        },
    };
};

export const addName = (data) => {
    return {
        type: "ADD_NAME",
        payload: {
            id: new Date().getTime().toString(),
            name: data,
        },
    };
};