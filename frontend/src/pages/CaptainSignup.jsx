import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [userdata, setuserData] = useState({})
  
  
   const submitHandler=(e)=>{
     e.preventDefault()
     setuserData({
      fullName:{
        firstName:firstname,
        lastName:lastname,
      },
      email:email,
      password:password
     })
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
        
        <h3 className=' text-lg font-medium mb-2'>What's your Captain's name</h3>
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

    
         <h3 className=' text-lg font-medium mb-2'>What's your Captain's email</h3>
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
 
         <button  className='bg-[#111] text-white font-semibold mb-2 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'>Create Account</button>
 
         <p className='text-center'>Already have account? <Link  to='/captain-login'className='text-blue-600'>Login here</Link></p>
       </form>
    </div>
   <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the 
    <span className='underline'>Google policy</span> and <span className='underline'> Terms of Service apply </span>.
       Privacy .</p>
 
     </div>
  )
}

export default CaptainSignup