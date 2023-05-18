import React from 'react'
import { toast } from 'react-toastify'

const FoodDetails3 = (props) => {
  function PlaceOrder(){
   toast.success("Order Placed Successfully")

  }
  return (

    <>
    <div className='details'>
        <h1>FoodDetails</h1>
        
      <div className='details1'>
        <img className='detailsimg' src='https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg'></img>
       
        <div className='details2'>
        <h2>FoodItem: {props.Food2} </h2>
        <h3>Price: {props.price2}</h3>
        <button onClick={PlaceOrder}>Place Order</button>

        </div>

      </div>
    </div>
    </>
  )
}

export default FoodDetails3
