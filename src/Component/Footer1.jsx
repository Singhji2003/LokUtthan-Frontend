import React from 'react'
import '../CSS/Footer1.css'
import { Link } from 'react-router-dom'
const Footer1 = () => {
    return (
        <footer>
            <div class="row">
                <div class="col">
                    <h3>
                        Contacts
                        <div class="underline"><span></span></div>
                    </h3>

                    <p>Adress:1662/2,Gali No.17,</p>
                    <p>Govind Puri,Kalkaji,New Delhi</p>
                    <p>Pin code : 110019</p>
                    <p class="emailid">Email : info@lokutthanfoundation.in</p>
                    <p >Phone : +91 0 11 1747 9993</p>
                </div>
                <div class="col">
                    <h3>Google Map<div class="underline"><span></span></div></h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0252452232526!2d77.25506959999998!3d28.538960900000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d9a24e2a8f%3A0x469bcb8c1b03b6f6!2sRamanujan%20College!5e0!3m2!1sen!2sin!4v1709313461617!5m2!1sen!2sin"
                        width="350"
                        height="200"
                        //   style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div class="col">
                    <h3>Donate<div class="underline"><span></span></div></h3>
                    <p>Help Us Change the Lives of Children in World</p>
                    <div class="button"><Link to="/contact">Donate</Link></div>
                    <div className='footer-logo'><img src={require('../Image/logo.png')} alt="" id="scanner" /></div>
                </div>

                <div class="col">
                    <h3>Menu & Links<div class="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Become a Volunteers</a></li>
                        <li><a href="">Members</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="main-media">
                <ul class="media">
                    <li>
                        <a href="https://www.instagram.com/lokutthanfoundation/"> </a>
                        <i class="fab fa-instagram" ></i>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/lokutthanfoundation/"></a>
                        <i class="fab fa-facebook-f"></i>
                    </li>
                    <li>
                        <a href="https://twitter.com/LokUtthan/">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/lokutthanfoundation/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.youtube.com/@lokutthanfoundation">
                            <i class="fab fa-youtube"></i
                            ></a>
                    </li>
                </ul>
            </div>
            <hr />
            <div class="cpyright">
                <p>Copyright @ 2024 Lok utthan foundation</p>
                <p>Privacy Policy | Term and Condition</p>
            </div>
        </footer>
    )
}

export default Footer1