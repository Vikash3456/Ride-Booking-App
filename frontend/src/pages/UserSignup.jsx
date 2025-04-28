import React, { use, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'



const UserSignUp = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstname] = useState('')
const [lastName, setLastname] = useState('')
const [userdata, setuserData] = useState({})
 
const navigate=useNavigate( )
const {user,setUser}=React.useContext (UserDataContext)

 const submitHandler= async (e)=>{
   e.preventDefault()
   const newUser=({
    fullname:{
      firstname:firstName,
      lastname:lastName,
    },
    email:email,  
    password:password
   })

   const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newUser)

   if(  response.status===201){ 
    const data=response.data
    setUser(data.user)

    localStorage.setItem('token',data.token) // depend on token 
    navigate('/home')
   }

   console.log(userdata)
   setEmail('')
   setFirstname('')
   setLastname('')
   setPassword('')

   
 }




  return (
    <div className=' h-screen p-7 flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10 'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=" Uber photo black wala " />
       <form  onSubmit={(e)=>{
         submitHandler(e)
       }} action="">
        
        <h3 className=' text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex  gap-4 mb-5'>
        <input  
         required
         className='bg-[#eeeee]  rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm'
         type="text" 
         placeholder='first name'
         value={firstName}
         onChange={(e)=>{
          setFirstname(e.target.value)
         }}
         />

<input  
         required
         className='bg-[#eeeee]  rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base'
         type="text" 
         placeholder='last name' 
         value={lastName}
         onChange={(e)=>{
          setLastname(e.target.value)
         }}
         />
    </div>

    
         <h3 className=' text-lg font-medium mb-2'>What's your email</h3>
         <input  
         required
         className='bg-[#eeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         type="email" 
         placeholder='email@gmail.com'
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         />
 
         <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>
         <input 
         required 
         className='bg-[#eeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         type="password" 
         placeholder='Password' 
         value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
         }}
         />
 
         <button  className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Create Account</button>
 
         <p className='text-center'>Already have account? <Link  to='/login'className='text-blue-600'>Login Here</Link></p>
       </form>
    </div>
   <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls. WhatsApp or SMS
messages, including by automated means, from Uber and
its affiliates to the number provided.</p>
 
     </div>
  )
}

export default UserSignUp