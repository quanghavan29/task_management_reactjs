import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" activeClassName="activeNavItem">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClassName="activeNavItem">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClassName="activeNavItem">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" activeClassName="activeNavItem">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/detail" activeClassName="activeNavItem">Detail</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile" activeClassName="activeNavItem">Profile</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="home" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/todolist-rcc" activeClassName="activeNavItem">ToDoList RCC</NavLink>
                                <NavLink className="dropdown-item" to="/todolist-rfc" activeClassName="activeNavItem">ToDoList RFC</NavLink>
                                <NavLink className="dropdown-item" to="/todolist-saga" activeClassName="activeNavItem">ToDoList Saga</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}
