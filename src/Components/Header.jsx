import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/Home.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <NavLink style={{"font-family":"'Merienda', cursive", fontWeight: "700"}} to="/" className="navbar-brand ms-3"><span className="text-light">Port</span><span className="text-danger">Fol</span></NavLink>
                <button className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#toggler_id">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="toggler_id">
                    <ul className="navbar-nav ms-auto text-center me-3" style={{fontFamily:"'Ubuntu', sans-serif",}}>
                        <li className="nav-item"><NavLink to="/" exact className="nav-link">HOME</NavLink></li>
                        <li className="nav-item"><NavLink to="/Developer" exact className="nav-link">DEVELOPER</NavLink></li>
                        <li className="nav-item"><NavLink to="/project" exact className="nav-link">PROJECT</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" exact className="nav-link">CONTACT</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
