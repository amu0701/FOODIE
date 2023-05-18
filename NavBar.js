
import {Link}  from 'react-router-dom'

const NavBar = (props) => {
  
  
  return (
    <div className='navbar'>
      <li>
        <ul><span>FOODIE</span></ul>
        <Link to={"/"}><ul>Home</ul></Link>
        <Link to={'/MyCart'}><ul >My-Cart<p className='notify'>{props.data}</p></ul></Link>
        <Link to={'/About'}><ul>About</ul></Link>
      
      
      </li>
    </div>
  )
}

export default NavBar
