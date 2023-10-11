import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = (props) => {
  const totalAmount = props.cart.reduce((total, item) => total + item.price, 0);
  
  return (
    <div className='cartContainer'>
      {props.cart.map((item,id)=>(
        
        <div className='cart grid grid-five-column 'key={item.id}>
            <div className='title mx-3'>Title:-{item.title}</div>
            <div className='price mx-3'>Price:-{item.price}</div>
            <img src={item.imageUrl} className='imageCart'></img>
            <div className='quantity mx-3'>Quantity:-{item.quantity}</div>
          
            <button className='button btn-danger mx-1 mt-1'>Remove</button>
        
        </div>
       
      ))}
      <div>
        <span>Total Amount:-</span>
      <span>{totalAmount }/-</span>
      <button className='button btn-warning mx-1'>Confirm Order</button>
      </div>

    </div>
  )
}

export default Cart
