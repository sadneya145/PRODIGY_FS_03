import React, { useContext } from 'react'
import './Css/ShoppingCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import dropdown_menu from '../Components/Assets/dropdown_menu.png'

const ShoppingCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="this is banner" />
      <div className="shoppcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 12 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_menu} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShoppingCategory
