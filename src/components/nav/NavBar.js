import React, {useState} from "react"
import {Link} from "react-router-dom"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const NavBar = props => {
    const {isAuthenticated, logout} = useSimpleAuth()
    

    return (
        <nav>
            <ul>
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                {
                    isAuthenticated() ?
                        <li className="nav-link">
                            <Link className="nav-link" to="/jobs">Jobs</Link>
                        </li>
                        : null
                }
                {
                    isAuthenticated() ?
                        <li className="nav-link">
                            <button onClick={() => {
                                logout()
                                props.history.push({
                                    pathname: "/"
                                })
                            }}>
                                Logout
                            </button>
                        </li>
                        :
                        <>
                            <li className="nav-link">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-link">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                }      
            </ul>
        </nav>
    )
}

export default NavBar