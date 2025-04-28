import React, {  useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {UserDataContext} from '../context/UserContext'
import { useContext } from 'react'
import axios from 'axios'

const UserLogin = () => {

  const [email, setEmail] = useState(' ')  // two way binding 
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

const {user,setUser}=useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler=async(e)=>{
      e.preventDefault()
      
      const userData={
        email:email,
        password:password
      }

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,userData);
      
    if(response.status===200){
      const data=response.data
      setUser(data.user)

      localStorage.setItem('token',data.token) //depend on token 
      navigate('/home')
    }
      

      console.log(userData)
      setEmail('')
      setPassword('')
  }
  return (
    <div className=' h-screen p-7 flex flex-col justify-between'>
   <div>
   <img className='w-16 mb-10 'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=" Uber photo black wala " />
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }} action="">
        <h3 className=' text-lg font-medium mb-2'>What's your email</h3>
        <input  
        required
        value={email} 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder='email@gmail.com' />

        <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder='Password' />

        <button  className='bg-[#111] text-white font-semibold mb-2 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'>login</button>

        <p className='text-center'>New here? <Link  to='/signup'className='text-blue-600'>Create new Account</Link></p>
      </form>
   </div>
   <Link to='/captain-login' className='bg-[#10b461] flex  justify-center items-center text-white font-semibold mb-5 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'>Sign as Captain</Link>

    </div>
  )
}

export default UserLogin