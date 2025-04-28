import React, { useContext,useEffect} from 'react'
import { CaptainDataContext } from '../context/CaptainContex'
import  {useNavigate}from 'react-router-dom'
const CaptainProtectedWrapper = ({
        children
}) => {
 
const {captain,setCaptain}=useContext(CaptainDataContext)

  const token =localStorage.getItem('token')
    const navigate=useNavigate()
useEffect(()=>{
 
    if(!token){
      navigate('/captain-login')
    }
}
,{token})

  return (
 <>
  {children}

 </> )
}

export default CaptainProtectedWrapper