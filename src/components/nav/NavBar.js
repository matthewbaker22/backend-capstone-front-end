import React, {useState} from "react"
import {Link} from "react-router-dom"

const NavBar = props => {

    return (
        <nav>
            <ul>
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar