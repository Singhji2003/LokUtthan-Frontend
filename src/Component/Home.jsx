import React from 'react'
import HeroSection from './HeroSection'
import HomeService from './HomeService'
import HomeVolunteer from './HomeVolunteer'
import HomeAbout from './HomeAbout'
import HomeWork from './HomeWork'
import HomeReview from './HomeReview'
import HomeContact from './HomeContact'
import Footer1 from './Footer1'
import ScrollToTop from './ScrollToTop'
const Home = () => {
  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <HomeService />
      <HomeVolunteer />
      <HomeAbout />
      <HomeWork />
      <HomeReview />
      <HomeContact />
      <Footer1 />
    </>
  )
}

export default Home