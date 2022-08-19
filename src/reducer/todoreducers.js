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
        case "ADD_NAME":
            const name = action.payload;
            return {
                ...state,
                list: [...state.list, name],
            };
        default:
            return state;
    }
};

export default todoReducer;