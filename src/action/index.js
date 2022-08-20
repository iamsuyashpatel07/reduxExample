import { put, all } from "redux-saga/effects";

// ...
function* helloSaga() {
    yield console.log("Hello Sagas!");
}

export function* showName() {
    const response = yield fetch("https://swapi.dev/api/people");
    const json = yield response.json();
    const data = json.results;
    yield put({
        type: "SHOW_NAME",
        payload: {
            data: data,
        },
    });
}

export const addName = (data) => {
    return {
        type: "ADD_NAME",
        payload: {
            id: new Date().getTime().toString(),
            name: data,
        },
    };
};

export default function* rootSaga() {
    yield all([helloSaga(), showName()]);
}