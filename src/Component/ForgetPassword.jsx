import React, { useState } from 'react'
import '../CSS/Login.css'
import Spinner from './Spinner'
const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [spinner, setSpinner] = useState(false)
    const onChange = (e) => {
        setEmail(e.target.value)
    }
    const forgetpswd = async (e) => {
        setSpinner(true)
        e.preventDefault();
        const response = await fetch(`https://lokutthanpehalbackend.onrender.com/forget-password`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            // props.showAlert("Link has been sent to your Email id Succesfully.", 'success')
            alert("Link has been sent to your Email id Succesfully.")
            setEmail('');

        }
        else {
            alert("Email does not Exists.")
            // props.showAlert("Email does not Exists.", 'error')
        }
        setSpinner(false)
    }
    return (
        <form className="login" onSubmit={forgetpswd}>
            <h1>Reset Password</h1>
            <input type="email" name="email" autoComplete='off' value={email} id="email" onChange={onChange} placeholder="Email" required />
            <div className="submit-button">
                <button type="submit" className="but">Submit</button>
                {spinner && <Spinner />}
            </div>

        </form>
    )
}

export default ForgetPassword