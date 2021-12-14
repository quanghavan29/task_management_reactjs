import {applyMiddleware, combineReducers, createStore} from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer';
import LoadingReducer from './reducers/LoadingReducer';

import reduxThunk from 'redux-thunk';

import createMiddleWareSaga from 'redux-saga';
import {rootSaga} from './sagas/rootSaga';

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    ToDoListReducer,
    LoadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));
middleWareSaga.run(rootSaga);

export default store;