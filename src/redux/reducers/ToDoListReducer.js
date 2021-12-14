import { GET_ALL_TASKS } from "../constant/ToDoListConst";

const initialState = {
    taskList: [],
}

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_TASKS: {
            state.taskList = action.taskList;
            return {...state};
        }

    default:
            return state
    }
}

export default ToDoListReducer;