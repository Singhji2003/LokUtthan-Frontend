import React from 'react'
import '../CSS/Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="each-content-footer">
                    <div className="each-content-footer-header">
                        <h2>Contact us</h2>
                    </div>
                    <div className="each-content-footer-content">
                        <li><i class="fa-solid fa-phone"></i>+919999999999</li>
                        <li><i class="fa-solid fa-envelope"></i>singhji@gmail.com</li>
                        <li><i class="fa-solid fa-location-dot"></i>Hosing board colony sector 42 gurgram Haryana 122002 </li>
                    </div>
                </div>
                <div className="each-content-footer">
                    <div className="each-content-footer-header">
                        <h2>Usefull Link</h2>
                    </div>
                    <div className="each-content-footer-content">
                        <li><a href="">Donate</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Retrun & Refunf Policy</a></li>
                        <li><a href="">Contact us</a></li>
                    </div>
                </div>
                <div className="each-content-footer">
                    <div className="each-content-footer-header">
                        <h1>&nbsp;</h1>
                    </div>
                    <div className="each-content-footer-content">
                        <li><a href="">About us</a></li>
                        <li><a href="">Galery</a></li>
                        <li><a href="">FAQ </a></li>
                    </div>
                </div>
                <div className="each-content-footer">
                    <div className="each-content-footer-header">
                        <h2>Follow us</h2>
                    </div>
                    <div className="each-content-footer-content social-icons">
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-square-instagram"></i></li>
                        <li><i class="fa-brands fa-square-twitter"></i></li>
                    </div>
                </div>
            </div>
            <div className="copyright-footer">
                &copy; 2024 LokUtthan Foundation All right reserved |
            </div>

        </>
    )
}

export default Footer