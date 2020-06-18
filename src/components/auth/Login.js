import React, {useRef} from "react"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const Login = (props) => {
    const username = useRef()
    const password = useRef()
    const {login} = useSimpleAuth()

    const handleLogin = (evt) => {
        evt.preventDefault()

        const credentials = {
            "username": username.current.value,
            "password": password.current.value
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h3>Sign in</h3>
                <fieldset>
                    <label htmlFor="inputUsername"> Username </label> 
                    <input ref={username} type="username"
                        className="form-control"
                        placeholder="username"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default Login