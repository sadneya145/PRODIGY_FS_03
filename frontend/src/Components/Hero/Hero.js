import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import hero_right from'../Assets/hero_right.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>NEW</p>
                <img src={hand_icon} alt="This is hand icon" />
            </div>
                <p>Collections</p>
                <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="This is an arrow icon" />
        </div>
      </div>
      <div className="hero-right">
            <img src={hero_right} alt="This is a right icon" />
      </div>
    </div>
  )
}

export default Hero
