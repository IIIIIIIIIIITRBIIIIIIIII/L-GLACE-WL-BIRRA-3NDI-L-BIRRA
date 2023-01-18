import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {  addTask } from '../redux/crud'
import './Birra.css'
import List from './crud/List'

const Birra = () => {
  const location=useLocation()
  console.log(location.state)
  const el = location.state
  const [test, setTest] = useState({title:""})
  const dispatch = useDispatch()
   return (
    <div>
    <div className='ja'>
<img src={el.img}className="ma" alt='hy'/>
<h1> {el.title} </h1>
<br/>
<p>{el.description}</p>
<br/>
<p>{el.price}</p>

<Link to="/Success">
<button>Buy</button>
</Link>

<Link to="/">
  <button>home</button>
</Link>
    </div>

    <form  onSubmit={(e) => {
    e.preventDefault()
    dispatch(addTask({...test , id:Math.floor(Math.random()* 100000000 )}))}}>
        <input type="text" required onChange={(e) => setTest({...test, title:e.target.value})}/>
<button type='submit'>SUBMIT</button>
    </form>
    <List />
    </div>
  )
}

export default Birra