import React from 'react'
import "./Nav.css"
import { IoMdBeer } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../redux/login'
import { Link } from 'react-router-dom'
import {GrBasket} from 'react-icons/gr'
import { logout } from '../redux/login'
const Nav = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  return (
    <>

          <nav>
          {user ? <><div className='b'>
            <IoMdBeer size={50} className='IoMdBeer'/>
            <p className='ghg'>BIRRA HKOK</p>
            <Link to='/basket' className='GrBasket'>
            <GrBasket size={50} className='GrBasket'/>
            </Link>
            </div>
             
            <div className='s'>
            
            <input type='search' placeholder='search'/> 
            
            </div> 
            <Link to='/' className='fdfd'>
            <button onClick={()=> dispatch(logout())}>log out</button>
            </Link> </> : <><Link to='/Form'>
      <button>login</button>
    </Link></>}
            
          </nav>
    </>
  )
}

export default Nav