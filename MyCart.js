import React, { useState } from 'react'


const MyCart = (props,{del}) => {
  const [delete1,setDelete1]=useState(props.data);
  const [list,setList]=useState([]);
  
  
  function del(){
    setDelete1([])
   
    props.del([])
    
    
    
    
  }
  
  return (
    <>
    
      <h1>Total items in the cart : {props.datacount} </h1>
      <hr></hr>
      
      <div className='mycart'>
        <h2>Item:{props.cartitem.itemName}</h2>
        <h2>Count: {props.cartitem.count}</h2>
      
      </div>
      <div className='mycart1'>
        <button className='delete' onClick={del} >DeleteCart</button>
      </div>
     
    
    
    </>
    
  )
}

export default MyCart
