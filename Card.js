import React from 'react'
import { useState } from 'react'
import { Link, Outlet} from 'react-router-dom';
import { ToastContainer ,toast} from 'react-toastify';


const Card = (props,{callback,callback1,callback2}) => {
    const [num,setNum]=useState(0);
    function inc() {
        if(num < 10){
            setNum(num+1)
        }
        
    }
    function dec(){
        if(num===0){
            setNum(0);
        
        }
        else{
            setNum(num-1);

        }
        
        
    }
    const [num1,setNum1]=useState(0);
    function inc1() {
        if(num1 < 10){
            setNum1(num1+1)
        }
    }
    function dec1(){
        if(num1===0){
            setNum1(0);
        
        }
        else{
            setNum1(num1-1);

        }
        
        
    }
    const [num2,setNum2]=useState(0);
    function inc2() {
        if(num2 < 10){
            setNum2(num2 +  1);
        }
    }
    function dec2(){
        if(num2===0){
            setNum2(0);
        
        }
        else{
            setNum2(num2-1);

        }
        
        
    }
    
    const [data1,setData1] = useState();
    function callback(){
        setData1({count:num , itemName:props.Food1});
        props.callback({count:num , itemName:props.Food1})
        if(num>0){
            toast.success("Item added to cart")

        }
        else{
            toast.warning("Please add valid amount of item")
        }
   }
   const [data2,setData2] = useState([]);
    function callback1(){
        setData2 ({count:num1 , itemName:props.Food2});
        props.callback({count:num1 , itemName:props.Food2})
        if(num1>0){
            toast.success("Item added to cart")

        }
        else{
            toast.warning("Please add valid amount of item")
        }
   }
   const [data3,setData3] = useState([]);
    function callback2(){
        setData3 ({count:num2 , itemName:props.Food3});
        props.callback({count:num2 , itemName:props.Food3})
        if(num2>0){
            toast.success("Item added to cart")

        }
        else{
            toast.warning("Please add valid amount of item")
        }
        
   }

   
  return (
    <>
    
    <div className='card'>
        <div className='card1'>
            <Link to={"/FoodDetails"}><img className='img1'   src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80'></img></Link>
            <h1>{props.Food1}</h1>
            <div className='func'>
                <button className='dec' onClick={dec}><i class="fa-solid fa-minus" ></i></button>
                <h1>{num}</h1>
                <button className='inc' onClick={inc}><i class="fa-regular fa-plus" ></i></button>
            </div>
            <button value={num} onClick={callback}>Add to Cart</button>
        </div>
        <div className='card1'>
            <Link to={"/FoodDetails3"}>
            <img className='img2' src='https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg'></img>
            </Link>
            <h1>{props.Food2}</h1>
            <div className='func'>
                <button className='dec' onClick={dec1}><i class="fa-solid fa-minus"></i></button>
                <h1>{num1}</h1>
                <button className='inc' onClick={inc1}><i class="fa-regular fa-plus" ></i></button>
            </div>
            <button value={num1} onClick={callback1}>Add to Cart</button>
        </div>
        <div className='card1'>
            <Link to={"/FoodDetail4"}><img className='img3' src='https://www.dfordelhi.in/wp-content/uploads/2016/10/Indian-Food-Samosa-Dish-HD-Wallpapers.jpg'></img></Link>
            <h1>{props.Food3}</h1>
            <div className='func'>
                <button className='dec' onClick={dec2}><i class="fa-solid fa-minus"></i></button>
                <h1>{num2}</h1>
                <button className='inc' onClick={inc2}><i class="fa-regular fa-plus"></i></button>
            </div>
            <button value={num2} onClick={callback2}>Add to Cart</button>
        </div>
        <Outlet/>
        <ToastContainer/>
        
    </div>
    </>
  )
}

export default Card