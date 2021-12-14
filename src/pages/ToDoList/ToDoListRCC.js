import React, { Component } from 'react';
import './ToDoList.css';
import axios from 'axios';

export default class ToDoListRCC extends Component {

    state = {
        taskList: [],
        values: {
            taskName: '',
        },
        errors: {
            taskName: '',
        }
    }

    getTaskList = () => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET',
        });

        promise.then((respone) => {
            this.setState({
                taskList: respone.data,
            });
        });

        promise.catch((error) => {
            console.log(error);
        });
    }

    renderTaskToDo = () => {
        return this.state.taskList.filter(task => !task.status).map((task, index) => {
            return <li key={index}>
                <span>{task.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => { this.deleteTask(task.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={() => { this.doneTask(task.taskName) }}>
                        <i className="far fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    renderTaskCompleted = () => {
        return this.state.taskList.filter(task => task.status).map((task, index) => {
            return <li key={index}>
                <span>{task.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => { this.deleteTask(task.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={() => { this.rejectTask(task.taskName) }}>
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }

    onChangeInputValue = (event) => {
        let { name, value } = event.target;
        let newValues = { ...this.state.values, [name]: value };
        let newErrors = { ...this.state.errors };

        if (value.trim() === '') {
            newErrors[name] = name + ' invalid!';
        } else {
            newErrors[name] = '';
        }

        this.setState({
            values: { ...newValues },
            errors: { ...newErrors },
        }, () => { console.log(this.state) });
    }


    componentDidMount() {
        this.getTaskList();
    }

    addTask = (event) => {
        event.preventDefault();
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName: this.state.values.taskName }
        });

        promise.then((response) => {
            console.log(response);
            this.getTaskList();
        });

        promise.catch((error) => {
            console.log('add task fail!');
            console.log(error.response.data);
        })
    }

    deleteTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE',
        });

        promise.then((response) => {
            console.log(response.data);
            this.getTaskList();
        })

        promise.catch((error) => {
            console.log('delete task fail!');
            console.log(error.response.data);
        })
    }

    doneTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT',
        });

        promise.then((response) => {
            console.log(response.data);
            this.getTaskList();
        })

        promise.catch((error) => {
            console.log('delete task fail!');
            console.log(error.response.data);
        })
    }

    rejectTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT',
        });

        promise.then((response) => {
            console.log(response.data);
            this.getTaskList();
        })

        promise.catch((error) => {
            console.log('reject task fail!');
            console.log(error.response.data);
        })
    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <div>
                    <button onClick={() => { this.getTaskList() }}>Get task list</button>
                    <div className="card">
                        <div className="card__header">
                            <img src={require('./bg.png').default} alt="img.jpg" />
                        </div>
                        {/* <h2>hello!</h2> */}
                        <div className="card__body">
                            <div className="card__content">
                                <div className="card__title">
                                    <h2>My Tasks</h2>
                                    <p>September 9,2020</p>
                                </div>
                                <div className="card__add">
                                    <input id="newTask" name="taskName" type="text" placeholder="Enter an activity..." onChange={this.onChangeInputValue} />
                                    <button id="addItem" onClick={this.addTask}>
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                                <p className="text text-danger">{this.state.errors.taskName}</p>
                                <div className="card__todo">
                                    {/* Uncompleted tasks */}
                                    <ul className="todo" id="todo">
                                        {this.renderTaskToDo()}
                                    </ul>
                                    {/* Completed tasks */}
                                    <ul className="todo" id="completed">
                                        {this.renderTaskCompleted()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
