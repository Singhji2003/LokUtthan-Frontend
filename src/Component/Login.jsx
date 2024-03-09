import React, { useState } from 'react'
import '../CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const naviagte = useNavigate();
    const [auth, setAuth] = useState({
        email: '',
        password: ''
    })
    const onChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }
    const submitLogin = async (e) => {
        setSpinner(true)
        e.preventDefault()
        const response = await fetch(`https://lokutthanpehalbackend.onrender.com/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: auth.email, password: auth.password }),
        });
        const json = await response.json();
        if (json.msg == 'Login with correct cerdentials') {
            // props.showAlert('Login with correct details', 'error')
            alert("Login with correct details")
        }
        if (json.success == 'true') {
            localStorage.setItem('authToken', json.authToken)
            // props.showAlert('Successfully Logged in', 'success')
            navigate('/')
        }
        setSpinner(false);
    }
    return (
        <form className="login" onSubmit={submitLogin}>
            <h1>Login Page</h1>
            <input type="email" name="email" value={auth.email} autoComplete='off' id="email" onChange={onChange} placeholder="Email" required />
            <div className="password">
                <input
                    type={!showPassword ? "password" : "text"}
                    onChange={onChange}
                    name="password"
                    id="password"
                    value={auth.password}
                    autoComplete='off'
                    placeholder="Enter your Password"
                    required
                />
                {!showPassword ? <i className="fa-solid fa-eye" onClick={() => {
                    setShowPassword(!showPassword)
                }}></i> : <i className="fa-solid fa-eye-slash" onClick={() => {
                    setShowPassword(!showPassword)
                }}></i>}
            </div>
            <p>
                <input type="checkbox" />Remember Me
            </p>
            <div className="submit-button">
                <button type="submit" className="but">Login
                </button>
                {spinner && <Spinner />}
            </div>
            <div className="not-account">
                <p>Don't have a account?</p>
                <Link to="/sign-up" id="sssd">Sign Up</Link>
            </div>
            <Link to="/forget-password">Forget Password</Link>
        </form>
    )
}

export default Login