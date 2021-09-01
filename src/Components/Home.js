import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/Home.css'

const Home = () => {
    return (
        <div className="image text-center">
            <div className="home">
                <h3 className="home_title px-1">Hasnain Sadid</h3>
                <p className="home_desc p-2">I am a web designer who has a passion for designing websites.</p>
                <NavLink to="/Developer" className="btn btn-success btn-lg text-dark">Get Started</NavLink>
            </div>
        </div>
    )
}

export default Home
