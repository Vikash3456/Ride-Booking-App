import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen pt-8  w-full bg-[url(https://images.unsplash.com/photo-1724501733503-17e18bd41b11?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-red-400 flex justify-between flex-col  '>
      <img className='w-16 ml-8 'src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" />
      <div className=' py-4 pb-7  px-4 bg-white' > 
            <h2 className=' text-3xl font-bold text-center'>Get Started with Uber</h2>  
            <Link to='/login' className='flex items-center justify-center text-white bg-black rounded-lg mt-5 py-3 '>Continue</Link>
      </div>
    </div>
  )
}

export default Start