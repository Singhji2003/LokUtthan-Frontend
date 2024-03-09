import React from 'react'
import '../CSS/HomeAbout.css'
const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="left-home-about">
        <h1>Welcome to Lok Utthan Foundation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus est soluta animi harum ipsam quae omnis molestiae alias eos odit facilis delectus facere impedit cupiditate placeat consectetur ducimus suscipit, voluptatum esse repudiandae illum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptates tempore, tenetur iusto ipsa exercitationem magni. Optio magni ad laboriosam dolorem doloremque hic.
        </p>
        <button>Read More</button>
      </div>
      <div className="right-home-about">
        <img src={require('../Image/p-5.jpg')} alt="" />
      </div>

    </div>
  )
}

export default HomeAbout