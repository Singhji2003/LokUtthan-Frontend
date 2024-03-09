import React from 'react'
import '../CSS/HomeService.css'
const HomeService = () => {
    return (
        <div className="home-service">
            <div className="each-home-service">
                <img src={require('../Image/service-food.png')} alt="" />
                <h2>Healthy Food</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur possimus earum labore alias natus reiciendis temporibus doloribus necess</p>
            </div>
            <div className="each-home-service">
                <img src={require('../Image/service-education.png')} alt="" />
                <h2>Education</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur possimus earum labore alias natus reiciendis temporibus doloribus necessi</p>
            </div>
            <div className="each-home-service">
                <img src={require('../Image/service-water.png')} alt="" />
                <h2>Pure Water</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur possimus earum labore alias natus reiciendis temporibus doloribus necessi</p>
            </div>
            <div className="each-home-service">
                <img src={require('../Image/service-medical.png')} alt="" />
                <h2>Medical</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur possimus earum labore alias natus reiciendis temporibus doloribus necess</p>
            </div>
        </div>
    )
}

export default HomeService