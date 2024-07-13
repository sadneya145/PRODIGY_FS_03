import React from 'react'
import './Breadcrum.css'
import arroe from '../Assets/arroe.png'

const Breadcrum = (props) => {
    const {product} =props
  return (
    <div className='breadcrum'>
      HOME <img src={arroe} alt="arrow icon" /> SHOP <img src={arroe} alt="arrow icon" /> {product.category} <img src={arroe} alt="arrow icon" />{product.name}
    </div>
  )
}

export default Breadcrum
