import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shoping from './Pages/Shoping.js'
import Footer from './Components/Footer/Footer.js'
import ShopCategory from './Pages/ShoppingCategory.js'
import Product from './Pages/Product.js'
import Cart from './Pages/Cart.js'
import LoginSignup from './Pages/LoginSignup.js'
import mens_banner from './Components/Assets/men_banner.png'
import womens_banner from './Components/Assets/womens_banner.jpg'
import kids_banner from './Components/Assets/kids_banner.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shoping/>}/>
          <Route path='/mens' element={<ShopCategory banner ={mens_banner} category="men"/>} />
          <Route path='/womens' element={<ShopCategory banner ={womens_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner ={kids_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
