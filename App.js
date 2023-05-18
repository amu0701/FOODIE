import MyCart from './MyCart';
import About from './About';
import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import { Outlet, Route , BrowserRouter as Router , Routes,} from 'react-router-dom';
import FoodDetails from './FoodDetails';
import Footer from './Footer';
import FoodDetails3 from './FoodDetails3';
import FoodDetail4 from './FoodDetail4';
import { useEffect, useState } from 'react';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Dna} from 'react-loader-spinner'
function App() {
  const [data,setData]=useState(0);
  const [cartitem,setCartitem] = useState("");
  const [count1,setCount1] = useState(0);
  const callThisFromChildComponent = (data1,data2,data3) => {
    
    setData(data1.count+data)
    console.log(data1.count+data)
    setCartitem(data1)
    console.log((data1))
    setCount1(data1.count+count1)
    console.log(data1.count+count1)
    


  }
  function deletecart(delete1){
    setCartitem(delete1)
    setData(0)
    setCount1(0)
    console.log(delete1)
    toast.error("Deleted Cart")

  }
  const [loader,setLoader] = useState(true);
  useEffect (()=>{
    setTimeout(()=>{
      setLoader(false);

    },1000)
  })


  
  
  return (
    
    <Router>
      {
        loader ? (
          <div className='dna'>
            <div className='dnah1'>
              <h1>FOODIE</h1>
            </div>
            
            <Dna/>

          </div>
        ):(
          <div className="App">
          <NavBar data={data}/>
      

      
    
      <Routes>
        <Route path='/' element={<Card callback={callThisFromChildComponent} callback1={callThisFromChildComponent} callback2={callThisFromChildComponent} Food1='Pizza' Food2='Burger' Food3='Samosa'/>} >
        </Route>

          <Route path='/FoodDetails' element={<FoodDetails  Food1='Pizza' price1='150 INR' />}/>
          <Route path='/FoodDetails3' element={<FoodDetails3 Food2='Burger'  price2='200 INR'/>}/>
          <Route path='/FoodDetail4' element={<FoodDetail4 Food3='Samosa' price3='120 INR'/>}/>

        
        <Route path='/MyCart'   element={<MyCart cartitem={cartitem} datacount={count1} del={deletecart} />}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
        <ToastContainer/>
      
      <Footer/>

    </div>
        )
      }
      
      
  
    <Outlet/>
    </Router>
    
    
  );
}

export default App;
