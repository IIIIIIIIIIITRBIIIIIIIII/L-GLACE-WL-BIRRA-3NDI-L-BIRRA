
import React from 'react'
import { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { login } from '../redux/login'
import {Link} from 'react-router-dom'
import {selectUser} from '../redux/login'
export default function Login() {
const [name , setName] = useState("")
const [password , setPassword] = useState("")
const [ email, setEmail ] = useState("")   
const [age, setAge] = useState("")

const dispatch = useDispatch()
const user = useSelector(selectUser)
const Handler = (e) => {
  dispatch(login({
name: name,
email: email,
password: password,
loggedIn: true,
id: Math.floor(Math.random()*6969696969696969),
age:age,


  })
  )
  e.preventDefault()
  setName('')
  setEmail('')
  setPassword('')
} 
return (     
    <div>
<div >
  <form  onSubmit={Handler}>
    <label >username:</label>
      <input type="name" placeholder='your username' minLength={4} maxLength={15} required value={name} onChange={(e) => setName(e.target.value)} />
      <label >email:</label>
      <input type="email" placeholder='your email'  required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label >password:</label>
      
      <input type="password"   required placeholder='********' minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>age:</label>
      <input type="number" min={18} required onChange={(e) => setAge(e.target.value)}/>
{ user ?  <><Link to='/Home' ><button>continue</button></Link>  </> : <button type="submit"  className='molok'>Login</button>}
      </form>   
</div>
    </div>
  )
}