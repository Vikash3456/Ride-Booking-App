import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContex'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainSignup = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [userdata, setuserData] = useState({})


  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  

const {captain ,setCaptain}=React.useContext(CaptainDataContext)

   const submitHandler= async (e)=>{
     e.preventDefault()

    const CaptainData={
      fullname:{
        firstname:firstName,
        lastname:lastName,
      },
      email:email,
      password:password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
     }
     const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,CaptainData)

     if(response.status===201){
      const data=response.data 
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
     }
     console.log(userdata)
     setEmail('')
     setFirstname('')
     setLastname('')
     setPassword('')
     setVehicleCapacity('')
     setVehicleColor('')
     setVehiclePlate('')
     setVehicleType('')


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

        <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3> 
        <div className='flex gap-4 mb-5'>
          <input 
            required
            className='bg-[#eeeee] rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm'
            type="text"
            placeholder='Vehicle Color'
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          <input 
            required
            className='bg-[#eeeee] rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm'
            type="text"
            placeholder='Vehicle Plate Number'
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />
        </div>

        <div className='flex gap-4 mb-5'>
          <input 
            required
            className='bg-[#eeeee] rounded px-4 py-2 w-1/2 border text-base placeholder:text-sm'
            type="number"
            placeholder='Vehicle Capacity'
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />
          <select
            required
            className='bg-[#eeeee] rounded px-4 py-2 w-1/2 border text-base'
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
        </div>
 
         <button  className='bg-[#111] text-white font-semibold mb-2 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'>Create Captian Account</button>
 
         <p className='text-center'>Already have account? <Link  to='/captain-login'className='text-blue-600'>Login here</Link></p>
       </form>
    </div>
   <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the 
    <span className='underline'>Google policy</span> and <span className='underline'> Terms of Service Apply </span>.
       Privacy .</p>
 
     </div>
  )
}

export default CaptainSignup