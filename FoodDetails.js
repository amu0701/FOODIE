import React from 'react'
import { toast } from 'react-toastify'
const FoodDetails = (props) => {
  function PlaceOrder(){
    toast.success("Order Placed Successfully")

  }
  return (
    <>
    <div className='details'>
        <h1>FoodDetails</h1>
        
      <div className='details1'>
        <img className='detailsimg' src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80'></img>
       
        <div className='details2'>
        <h2>FoodItem: {props.Food1}</h2>
        <h3>Price: {props.price1}</h3>
        <button onClick={PlaceOrder}>Place Order</button>

        </div>

      </div>
    </div>
    </>
  )
}

export default FoodDetails
