import React, { useState } from 'react'
import '../CSS/HomeContact.css'
import { useNavigate } from 'react-router-dom'
const HomeContact = () => {
    const naviagte = useNavigate();

    const [auth, setAuth] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    })
    const onChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://lokutthanpehalbackend.onrender.com/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: auth.name, number: auth.number, email: auth.email, message: auth.message }),
            });
            const json = await response.json();
            alert(json.msg)
            setAuth({
                name: '',
                number: '',
                email: '',
                message: ''
            })
        }
        catch {
            alert("Some issue Occured Try agian After some time..")
            setAuth({
                name: '',
                number: '',
                email: '',
                feedback: ''
            })
        }
    }
    return (
        <div className="home-contact">
            <h1>Stay Touch With Us</h1>
            <div className="contact-form">
                <form onSubmit={submitForm}>
                    <div className="home-inputs">
                        <label htmlFor="name">Name</label>
                        <input type="text" autoComplete='off' value={auth.name} name="name" onChange={onChange} id="name" />
                    </div>
                    <div className="home-inputs">
                        <label htmlFor="email">Email</label>
                        <input type="email" autoComplete='off' value={auth.email} name="email" onChange={onChange} id="email" />
                    </div>
                    <div className="home-inputs">
                        <label htmlFor="number">Number</label>
                        <input type="number" autoComplete='off' value={auth.number} name="number" onChange={onChange} id="number" />
                    </div>
                    <div className="home-inputs">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" autoComplete='off' value={auth.message} id="message" onChange={onChange} cols="30" rows="5"></textarea>
                    </div>
                        <div className="form-buttons">
                            <button>Submit</button>
                            <button>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeContact