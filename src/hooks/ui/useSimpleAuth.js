import { useState } from "react"

const useSimpleAuth = () => {
    const [loggedIn, setIsLoggedIn] = useState(false)

    const isAuthenticated = () => 
        loggedIn || sessionStorage.getItem("jobsaver_token") !== null
    

    const register = userInfo => {
        return fetch("http://localhost:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(resp => resp.json())
            .then(resp => {
                if ("token" in resp) {
                    sessionStorage.setItem("jobsaver_token", resp.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const login = credentials => {
        return fetch("http://localhost:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    sessionStorage.setItem( "jobsaver_token", res.token )
                    setIsLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setIsLoggedIn(false)
        sessionStorage.removeItem("jobsaver_token")
    }

    return {isAuthenticated, logout, login, register}

}

export default useSimpleAuth