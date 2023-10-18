import React from 'react'
import { Link } from 'react-router-dom'
// import Home from '../Components/Home'
// import AboutUs from '../Components/AboutUs'
// import Contact from '../Components/Contact'



const Router = () => {
  return (
    <div>
        <header>
            <a href='#'>Logo</a>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/aboutus">About us</Link> </li>
                    <li> <Link to="/contact">Contact us</Link> </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Router