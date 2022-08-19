const initialData = {
    list: [],
};

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "SHOW_NAME":
            const { data } = action.payload;
            return {
                ...state,
                list: data,
            };
        default:
            return state;
    }
};

export default todoReducer;