
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import Header from './Componant/UI/Header';
import Home from './Componant/UI/Pages/Home';
import About from './Componant/UI/Pages/About';
import Store from './Componant/UI/Pages/Store';
import Cart from './Componant/Cart/Cart';
import { useContext, useEffect, useState } from 'react';
import ContactUs from './Componant/UI/Pages/ContactUs';
import StoreDetails from './Componant/UI/Pages/StoreDetails';
import LoginPage from './Componant/UI/Pages/LoginPage/LoginPage';
import Signup from './Componant/UI/Pages/LoginPage/Signup';
import AuthContext from './Componant/UI/Pages/LoginPage/auth-context';
const cartFromLocalStorage=JSON.parse(localStorage.getItem('Cartitems') || '[]');
function App() {
  const authCtx=useContext(AuthContext);

  const[cart,setCart]=useState(cartFromLocalStorage);
  
  const addToCart = (item) => {
    // cart.push(item);
    
    // setCart([...cart, item]);
   
    console.log(cart);
    const newCart = [...cart, item];
    setCart(newCart);
    
  };
  useEffect(()=>{
    localStorage.setItem('Cartitems',JSON.stringify(cart));
    
    },[cart])
  
  return (
    <Router>         
        <Header cart={cart}/>
      <Routes>


        <Route path='/Home' element={<Home/>}></Route>

        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact-Us' element={<ContactUs/>}></Route>
  {
    authCtx.isLoggedIn &&

      <Route path='/Store' exect element={<Store addToCart={addToCart}/>}> </Route>
  }
    

  <Route path='/Store' element={<Store addToCart={addToCart} cart={cart}/>}></Route>  
   
 
  

 
      
      <Route path='/Cart' element={<Cart  count={cart.length} cart={cart} />}></Route>
      <Route path='/Store/:ProductId' element={<StoreDetails addToCart={addToCart} cart={cart}/>}></Route>
      <Route path='/Login' element={<LoginPage/>}></Route>
      
    
      <Route path='/Signup'exect element={<Signup/>}>
        
      </Route>
      
      
      

     
      </Routes>

   
    </Router>
  );
}

export default App;
