import React, { useEffect } from 'react'
import '../CSS/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const navbar = document.getElementById('nav');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('changebg')
            }
            else {
                navbar.classList.remove('changebg')

            }

        })
    })
    const logOut = () => {
        localStorage.removeItem('authToken')
        navigate('/sign-in')
    }
    return (
        <nav>
            <div className="navbar" id='nav' >
                <div className="left-navbar">
                    <img src={require('../Image/logo.png')} alt="" />
                </div>
                <div className="center-navbar">
                    <ul>
                        <Link to="/"><li className="hover-underline-animation">WHAT WE DO</li></Link>
                        <Link to="/about"><li className="hover-underline-animation">ABOUT</li></Link>
                        <a href="#"><li className="hover-underline-animation">GALLERY</li></a>
                        <a href="#"><li className="hover-underline-animation">OUR PROGRAMS</li></a>
                        <Link to="/contact"><li className="hover-underline-animation">BECOME VOLOUNTEER</li></Link>
                    </ul>

                </div>
                <div className="right-navbar">
                    <ul>
                        <Link to={localStorage.getItem('authToken') ? '/contact' : 'sign-in'}><button>DONATE</button></Link>
                        {
                            localStorage.getItem('authToken') ? <button onClick={logOut}>Log Out</button> : ""
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar