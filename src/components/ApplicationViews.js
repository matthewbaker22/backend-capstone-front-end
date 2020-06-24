import {Route} from "react-router-dom"
import React from "react"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./home/Home"
import Job from "./job/Job"
import JobForm from "./job/JobForm"
import JobEditForm from "./job/JobEditForm"


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
            <Route exact path="/jobs" render={props => {
                return <Job {...props}/>
            }}/>
            <Route exact path="/job_form" render={props => {
                return <JobForm {...props}/>
            }}/>
            <Route path="/jobs/:jobId(\d+)/edit" render={props => {
                return <JobEditForm {...props}/>
            }}/>
        </React.Fragment>
    )
}

export default ApplicationViews