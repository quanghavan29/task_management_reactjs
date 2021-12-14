/*
    redux: 2 loại function
    loại 1: action => object => object (action thường)
    loại 2: action => function (thường dùng để xử lí api hoạc call other actions)
*/

import axios from 'axios';
import { all, call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_ALL_TASKS } from '../constant/ToDoListConst';
import { followActionGetAllTasks } from "./ToDoListSaga";

export function* rootSaga() {
    yield all([
        followActionGetAllTasks(),
    ])
}
