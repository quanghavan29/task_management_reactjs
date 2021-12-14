import axios from "axios"

export class ToDoListService {
    constructor() {

    }

    getAllTaskSaga = () => {
        return axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET',
        })
    }
}

export const toDoListService = new ToDoListService();