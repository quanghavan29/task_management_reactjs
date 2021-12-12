import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';

export default function Login(props) {

    const [userLogin, setUserLogin] = useState({ username: '', password: '' });

    console.log(userLogin);

    const onChangeValue = (event) => {
        const { name, value } = event.target;
        setUserLogin({ ...userLogin, [name]: value });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (userLogin.username === 'admin' && userLogin.password === '123') {

            // props.history.push('/home');

            // save userLogin to localStorage
            localStorage.setItem('userLogin', JSON.stringify(userLogin));

            // back to preveious page
            props.history.goBack();

            // props.history.replace('/home');
        } else {
            alert('Login Fail!');
            return;
        }
    }

    return (
        <form className="container mt-3" onSubmit={handleLogin}>
            <h3 className="pt-2 pb-2">LOGIN</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input name="username" className="form-control" onChange={onChangeValue} />
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input name="password" className="form-control" onChange={onChangeValue} />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
            </div>
            <Prompt when={true} message={(location) => {
                return "Do you want leave this page?";
            }}/>
        </form>
    )
}
