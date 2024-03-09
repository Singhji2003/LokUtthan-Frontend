import React from 'react'
import '../CSS/About.css'
import { Link } from 'react-router-dom'
import Footer1 from './Footer1'
import ScrollToTop from './ScrollToTop'
const About = () => {
  return (
    <>
    <ScrollToTop/>
      <div className="about-heading">
        <img src={require('../Image/home.PNG')} alt="" />
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="left-about-content">
          <span style={{ color: '#9EA7C4', fontSize: '1.2em', fontWeight: 700 }}>About US</span>
          <h1>Help is Our <span> Main Goal</span></h1>
          <p style={{ fontWeight: 500 }}>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike zebra danio king-of-the-salmon banjo catfish."</p>
          <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch
            <br /><br />
            Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet</p>
        </div>
        <div className="right-about-content"><img src={require('../Image/p-3.jpg')} alt="" /></div>
      </div>
      <div className="mission about-content">
        <div className="right-mission">
          <img src={require('../Image/mission.PNG')} alt="" />
        </div>
        <div className="left-mission">
          <h2>We work around the globe to save lives, defeat poverty and achieve social justice.</h2>
          <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata.
            <br /><br />
            Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern</p>
        </div>
      </div>
      <div className="team">
        <p>Team</p>
        <h1>Meet <span style={{ fontWeight: 400 }}> our Team</span></h1>
        <div className="teams">
          <div className="team-member">
            <img src={require('../Image/arpan.jpeg')} alt="" />
            <p style={{ color: "#FB6C26" }}>Arpan Singh</p>
            <p>Ceo/ Founder</p>
          </div>
          <div className="team-member">
            <img src={require('../Image/arpan.jpeg')} alt="" />
            <p style={{ color: "#FB6C26" }}>Arpan Singh</p>
            <p>Ceo/ Founder</p>
          </div>
          <div className="team-member">
            <img src={require('../Image/arpan.jpeg')} alt="" />
            <p style={{ color: "#FB6C26" }}>Arpan Singh</p>
            <p>Ceo/ Founder</p>
          </div>
          <div className="team-member">
            <img src={require('../Image/arpan.jpeg')} alt="" />
            <p style={{ color: "#FB6C26" }}>Arpan Singh</p>
            <p>Ceo/ Founder</p>
          </div>
        </div>
      </div >
      <div className="become-vollunteer">
        <button> <Link to={'/contact'}>BECOME OUR VOLUNTEER</Link></button>
      </div>
      <div className="donors">
        <p>Donors</p>
        <h1>Who Help <span style={{ fontWeight: 400 }}> Us</span></h1>
        <img src={require('../Image/donors.PNG')} alt="" />
      </div>
      <Footer1/>
    </>
  )
}

export default About