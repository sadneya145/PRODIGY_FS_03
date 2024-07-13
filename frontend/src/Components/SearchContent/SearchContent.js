import React, { useState } from 'react';
import './SearchContent.css';
import all_products from '../Assets/All_products';
import Item from '../Item/Item';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = all_products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='search-container'>
      <input 
        type='text' 
        placeholder='Search for products...' 
        value={searchTerm} 
        onChange={handleChange} 
        className='search-input'
      />
      {searchTerm && (
        <div className='search-results'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, i) => (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
