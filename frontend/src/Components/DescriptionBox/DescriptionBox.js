import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aut ullam incidunt quaerat, unde neque nam fugit, optio alias odio dignissimos natus illo! Nobis reprehenderit iusto repudiandae tempore est molestias blanditiis velit alias aspernatur, saepe quaerat.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nisi at tempora!
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
