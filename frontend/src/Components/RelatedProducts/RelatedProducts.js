import React from 'react'
import './RelatedProducts.css'
import all_products from '../Assets/All_products'
import Item from '../Item/Item'

const RelatedProducts = ({category}) => {
  return (
    <div className='relatedproducts'>
      <h1>RELATED PRODCTS</h1>
      <hr/>
      <div className="collections">
      {all_products
          .filter(item => item.category === category)
          .map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default RelatedProducts
