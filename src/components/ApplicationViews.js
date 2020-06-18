import {Route} from "react-router-dom"
import React from "react"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./home/Home"


const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route exact path="/" render={props => {
                return <Home {...props}/>
            }}/>
            <Route exact path="/login" render={props => {
                return <Login isAuthenticated={useSimpleAuth.isAuthenticated} {...props}/>
            }}/>
            <Route exact path="/register" render={props => {
                return <Register {...props}/>
            }}/>

        </React.Fragment>
    )
}

export default ApplicationViews