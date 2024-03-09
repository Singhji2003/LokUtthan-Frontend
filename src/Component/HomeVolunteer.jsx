import React from 'react'
import '../CSS/HomeVolunteer.css'
const HomeVolunteer = () => {
    return (
        <div className="home-volunteer">
            <div className="left-home-volunteer">
                <img src={require('../Image/p-2.jpg')} alt="" />
            </div>
            <div className="right-home-volunteer">
                <div className="each-volunteer">
                    <div className="each-volunteer-heading">
                        <img src={require('../Image/home-volunteer.png')} alt="" />
                        <h2>Become a Volunteer With Us</h2>
                    </div>
                    <div className="each-volunteer-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa dolor ipsum inventore cupiditate, distinctio magni! Eum, enim quae! Laborum sint animi repudiandae earum! Quisquam dolore porro fugiat. Recusandae iure soluta illum dolore animi!</p>
                    </div>
                </div>
                <div className="each-volunteer celebrate">
                    <div className="each-volunteer-heading">
                        <img src={require('../Image/celebrate.png')} alt="" />
                        <h2>Celebrate Their Special Day</h2>
                    </div>
                    <div className="each-volunteer-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa dolor ipsum inventore cupiditate, distinctio magni! Eum, enim quae! Laborum sint animi repudiandae earum! Quisquam dolore porro fugiat. Recusandae iure soluta illum dolore animi!</p>
                    </div>
                </div>
                <div className="each-volunteer food">
                    <div className="each-volunteer-heading">
                        <img src={require('../Image/provide-food.png')} alt="" />
                        <h2>Provide Food For Every child</h2>
                    </div>
                    <div className="each-volunteer-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsa dolor ipsum inventore cupiditate, distinctio magni! Eum, enim quae! Laborum sint animi repudiandae earum! Quisquam dolore porro fugiat. Recusandae iure soluta illum dolore animi!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeVolunteer