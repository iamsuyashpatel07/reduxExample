export const showName = (data) => {
    console.log("skp", data);
    return {
        type: "SHOW_NAME",
        payload: {
            data: data,
        },
    };
};