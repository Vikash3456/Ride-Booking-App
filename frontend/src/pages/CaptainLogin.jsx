import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContex'
const CaptainLogin = () => {
  const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') // two way binding
    
    const {captain, setCaptain} =React.useContext(CaptainDataContext)
    const submitHandler=async (e)=>{
        e.preventDefault()
       const  CaptainData={
          email:email,
          password:password
        }
      const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,CaptainData)


      if(response.status===200){
        const data=response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }
        setEmail('')
        setPassword('')
    }
  return (
    <div className=' h-screen p-7 flex flex-col justify-between'>
   <div>
   <img className='w-16 mb-7 'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=" Uber photo black wala " />
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

        <button  className='bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2  w-full text-lg placeholder:text-base'>login</button>

        <p className='text-center'>join as fleet? <Link  to='/captain-signup'className='text-blue-600'>Register as Captain</Link></p>
      </form>
   </div>
   <Link to='/login' className='bg-[#d5622d] flex  justify-center items-center text-white font-semibold mb-5 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'>Sign as User</Link>

    </div>
  )
}

export default CaptainLogin