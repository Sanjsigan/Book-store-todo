import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({name}) {
    
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link className="navbar-brand nav-link" to="/book-list">
                 {name}
             </Link>
       
        </nav>
    )
}

export default Navbar
