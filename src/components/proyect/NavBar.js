import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Navbar</NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-item nav-link "  >Home</NavLink>
                    <NavLink to="/login" className="nav-link" >Login</NavLink>
                    <NavLink to="/search-heroe" className="nav-link" >Heroes</NavLink>
                    <NavLink to="/about" className="nav-link" >About</NavLink>
                    
                </div>
                </div>
            </div>
        </nav>
    )
}
