import React from 'react'

const Home = () => {
  return (
    <div className='h-screen relative'>
       <img className='w-16  absolute left-5 top-5 'src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=" Uber photo black wala " />

       <div className='h-screen w-screen '>
        <img  className='h-full w-full object-cover 'src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
       </div>
       <div className=' flex flex-col justify-end h-screen absolute  top-0 w-full '>
      <div className='h-[30%] bg-white p-5 '>
      <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form>
          <input  className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'type="text " placeholder=' Add a pick up loacation' />
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter destination' />
        </form>
      </div>
      <div className='h-[70%] bg-red-500 p-5 hidden'>

      </div>
       </div>
    </div>
  )
}

export default Home