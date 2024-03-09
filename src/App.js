import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Component/SignIn'
import Login from './Component/Login'
import ForgetPassword from './Component/ForgetPassword'
import HomeContact from './Component/HomeContact'
import About from './Component/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignIn />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/contact" element={<HomeContact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App