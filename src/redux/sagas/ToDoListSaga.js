import axios from 'axios';
import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_ALL_TASKS } from '../constant/ToDoListConst';
import { toDoListService } from "../../services/ToDoListService";
import { DISPLAY_LOADING, HIDE_LOADING } from '../constant/LoadingConst';

function* getAllTasksSaga(action) {

    try {
        yield put({
            type: DISPLAY_LOADING,
        })
    
        yield delay(1000);
    
        let response = yield call(toDoListService.getAllTaskSaga);
        let {data, status} = response;
        
        if (status === 200) {
            yield put({
                type: GET_ALL_TASKS,
                taskList: data,
            })
        } else {
            console.log('Error Code: ' + status);
        }

    
        yield put({
            type: HIDE_LOADING,
        })
    } catch (error) {
        
    }
}

export function* followActionGetAllTasks() {
    yield takeLatest('GET_ALL_TASKS_SAGA', getAllTasksSaga);
}