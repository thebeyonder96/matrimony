import React from 'react'

const Banner = ({img}:{img:string}) => {
  return (
    <div className='flex items-center justify-center my-10 '>
        <img src={img} className='w-full' alt="" />
    </div>
  )
}

export default Banner