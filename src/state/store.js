import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleware)
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
}

sagaMiddleware.run(rootSaga);

export default store;
