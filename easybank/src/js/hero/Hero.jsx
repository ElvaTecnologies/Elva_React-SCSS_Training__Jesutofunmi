import React from 'react'
import desktopHeroBg from '../../images/bg-intro-desktop.svg'
import mobileHeroBg from '../../images/bg-intro-mobile.svg'
import phones from '../../images/image-mockups.png'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-left">
        <h1>Next generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. </p>
        <button className='hero-button'>Request invite</button>
      </div>
      <div className="hero-right">
        <img className='heroBg' src={desktopHeroBg} alt="backgroundBg" />
        <img className='phones' src={phones} alt="phones" />
      </div>
    </section>
  )
}

export default Hero