import React, { useEffect, useState } from 'react'
import '../CSS/Home.css'
import { Link } from 'react-router-dom'
const HomeSection = () => {
  return (
    <div className="home">
      <div className="left-home">
        <h1>How We Help <span>Children</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid beatae saepe id, aliquam laboriosam error totam porro officiis neque cumque vero vel sunt tempora ratione consequuntur eos harum dignissimos sequi est quod doloremque cupiditate?, aliquam laboriosam error totam porro officiis neque cumque vero vel sunt tempora ratione consequuntur eos harum dignissimos sequi est quod doloremque cupiditate?</p>
        <div className="home-buttons">
          <Link to={localStorage.getItem('authToken') ? '/contact' : 'sign-in'}><button>DONATE</button></Link>
          <span>Discover+</span>
        </div>
      </div>
      <div className="right-home">
        <img src={require('../Image/b1.png')} alt="" />
      </div>

    </div>
  )
}

export default HomeSection