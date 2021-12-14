import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTaskApi, deleteTaskApi, doneTaksApi, undoTaskApi } from '../../redux/actions/ToDoListAction';

export default function ToDoListRFC(props) {

    const { taskList } = useSelector(state => state.ToDoListReducer);
    const dispatch = useDispatch()

    let [state, setState] = useState({
        taskList: [],
        values: {
            taskName: '',
        },
        errors: {
            taskName: '',
        }
    })

    const onChangeInputValue = (event) => {
        let { name, value } = event.target;
        let newValues = { ...state.values, [name]: value };
        let newErrors = { ...state.errors };

        if (value.trim() === '') {
            newErrors[name] = name + ' invalid!';
        } else {
            newErrors[name] = '';
        }

        setState({
            ...state,
            values: { ...newValues },
            errors: { ...newErrors },
        });
    }

    const renderTaskToDo = () => {
        return taskList.filter(task => !task.status).map((task, index) => {
            return <li key={index}>
                <span>{task.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => { deleteTask(task.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={() => { doneTask(task.taskName) }}>
                        <i className="far fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    const renderTaskCompleted = () => {
        return taskList.filter(task => task.status).map((task, index) => {
            return <li key={index}>
                <span>{task.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => { deleteTask(task.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={() => { rejectTask(task.taskName) }}>
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }

    const getTaskList = () => {
        dispatch(getAllTasks());
    }

    const addTask = (event) => {
        event.preventDefault();
        dispatch(addTaskApi(state.values.taskName));
    }

    const deleteTask = (taskName) => {
        dispatch(deleteTaskApi(taskName));
    }

    const doneTask = (taskName) => {
       dispatch(doneTaksApi(taskName));
    }

    const rejectTask = (taskName) => {
        dispatch(undoTaskApi(taskName));
    }


    useEffect(() => {
        getTaskList();
        return () => {

        }
    })


    return (
        <div className="card">
            <div className="card__header">
                <img src={require('./bg.png').default} alt="img.jpg" />
            </div>
            {/* <h2>hello!</h2> */}
            <form className="card__body" onSubmit={addTask}>
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className="card__add">
                        <input id="newTask" name="taskName" type="text" placeholder="Enter an activity..." onChange={onChangeInputValue} />
                        <button id="addItem">
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <p className="text text-danger">{state.errors.taskName}</p>
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo">
                            {renderTaskToDo()}
                        </ul>
                        {/* Completed tasks */}
                        <ul className="todo" id="completed">
                            {renderTaskCompleted()}
                        </ul>
                    </div>
                </div>
            </form>
        </div>

    )
}
