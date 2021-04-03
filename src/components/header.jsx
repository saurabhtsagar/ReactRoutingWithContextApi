import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar scroll</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active" href="javascripft:void(0)"><NavLink exact to="/">Home</NavLink></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="javascripft:void(0)"> <NavLink exact to="/about">About</NavLink></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="javascripft:void(0)"><NavLink exact to="/contact">Contact</NavLink></span>
                            </li>
                        </ul>
                        <form className="d-flex align-items-end">
                            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>)
    }
}

export default Header;