import axios from "axios";
import { GET_ALL_TASKS } from "../constant/ToDoListConst";

const getAllTasks = () => {

    return dispatch => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET',
        });

        promise.then((response) => {
            dispatch({
                type: GET_ALL_TASKS,
                taskList: response.data,
            })
            // setState({
            //     ...state,
            //     taskList: respone.data,
            // });
        });

        promise.catch((error) => {
            console.log(error);
        });
    }
}


const addTaskApi = (taskName) => {
    return dispatch => {

        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName }
        });

        promise.then((response) => {
            dispatch(getAllTasks());
        });

        promise.catch((error) => {
            console.log('add task fail!');
            console.log(error.response.data);
        })
    }
}

const deleteTaskApi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE',
        });

        promise.then((response) => {
            console.log(response.data);
            dispatch(getAllTasks());
        })

        promise.catch((error) => {
            console.log('delete task fail!');
            console.log(error.response.data);
        })
    }
}

const doneTaksApi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT',
        });

        promise.then((response) => {
            console.log(response.data);
            dispatch(getAllTasks());
        })

        promise.catch((error) => {
            console.log('delete task fail!');
            console.log(error.response.data);
        })
    }
}

const undoTaskApi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT',
        });

        promise.then((response) => {
            console.log(response.data);
            dispatch(getAllTasks());
        })

        promise.catch((error) => {
            console.log('reject task fail!');
            console.log(error.response.data);
        })
    }
}

export {
    getAllTasks,
    addTaskApi,
    deleteTaskApi,
    doneTaksApi,
    undoTaskApi,
}