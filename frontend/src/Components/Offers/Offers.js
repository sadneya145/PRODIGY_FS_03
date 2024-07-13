import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_img.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON SELLERS PRODUCTS</p>
        <button>Check Now</button>

      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="this is exclusive" />
      </div>
    </div>
  )
}

export default Offers
