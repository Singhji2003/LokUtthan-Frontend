import React, { useState } from 'react'
import '../CSS/SignIn.css'
import Spinner from './Spinner'
import { Link, useNavigate } from 'react-router-dom'
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [spinner, setSpinner] = useState(false)
    const naviagte = useNavigate();

    const [auth, setAuth] = useState({
        username: '',
        number: '',
        email: '',
        password: '',
    })
    const onChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }
    const submitSignUp = async (e) => {
        setSpinner(true)
        e.preventDefault()
        const response = await fetch(`https://lokutthanpehalbackend.onrender.com/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: auth.username, number: auth.number, email: auth.email, password: auth.password }),
        });
        const json = await response.json();
        if (json.success == 'true') {
            localStorage.setItem('authToken', json.authToken);
            // alert("")
            // props.showAlert("Succesfully Signed In", 'success')
            naviagte('/')
        }
        else if (json.msg == 'This Email Already Exists') {
            alert("This Email Already Exists")
            // props.showAlert("This Email Already Exists", 'error')
        }
        else if (json.msg == 'This Number Already Exists') {
            alert("This Number Already Exists")
            // props.showAlert("This Number Already Exists", 'error')
        }
        setSpinner(false);
    }
    return (
        <form className="signup" onSubmit={submitSignUp}>
            <h1>Sign up</h1>
            <input type="text" autoComplete='off' name="username" id="username" onChange={onChange} value={auth.username} placeholder="Username" required />
            <input type="email" autoComplete='off' name="email" id="email" onChange={onChange} value={auth.email} placeholder="Email" required />

            <input
                type="number"
                name="number"
                autoComplete='off'
                id="number"
                onChange={onChange} value={auth.number} placeholder="Contact Number"
                required
            />
            <div className="password">
                <input type={!showPassword ? "password" : "text"} autoComplete='off' name="password" id="password" onChange={onChange} value={auth.password} placeholder="Password" required />
                {!showPassword ? <i className="fa-solid fa-eye" onClick={() => {
                    setShowPassword(!showPassword)
                }}></i> : <i className="fa-solid fa-eye-slash" onClick={() => {
                    setShowPassword(!showPassword)
                }}></i>}
            </div>
            <p>Already have an Account <Link to="/sign-in">Sign In </Link></p>
            <div className="submit-button">
                <button type="submit" onClick={submitSignUp} className="but" id="sin"><Link >Signup</Link></button>
                {spinner && <Spinner/>}
            </div>
        </form>
    )
}

export default SignIn