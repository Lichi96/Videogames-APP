import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "./NavBar-styles";
import logo from "../../assets/logo.png";

const NavBar = () => {

    return (
        <Nav>
            <img src={logo} alt="logo" />
            <h1>All Videogames</h1>
            <Link to="/create">Create New Videogame</Link>
        </Nav>
    )
}

export default NavBar;