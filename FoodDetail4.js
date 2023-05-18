import React from 'react'
import { toast } from 'react-toastify'
const FoodDetail4 = (props) => {
  function PlaceOrder(){
    toast.success("Order Placed Successfully")

  }
  return (
    <div className='details'>
        <h1>FoodDetails</h1>
        
      <div className='details1'>
        <img className='detailsimg' src='https://www.dfordelhi.in/wp-content/uploads/2016/10/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg'></img>
       
        <div className='details2'>
        <h2>FoodItem: {props.Food3} </h2>
        <h3>Price: {props.price3}</h3>
        <button onClick={PlaceOrder} >Place Order</button>

        </div>

      </div>
    </div>
  )
}

export default FoodDetail4
