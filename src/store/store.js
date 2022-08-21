import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/index";
import rootSaga from "../action/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
export function callData() {
    sagaMiddleware.run(rootSaga);
}
export default store;