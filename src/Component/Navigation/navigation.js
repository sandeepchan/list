import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navigation = () =>
{
    
    return (
        
    <ul>
    <li><Link to="/signin">Signin</Link></li>
    <li><Link to="/register">Register</Link></li>
    
    </ul>
    )

}
export default Navigation;