import Image from 'next/image'
import React from 'react'

const Banner = ({img}:{img:string}) => {
  return (
    <div className='flex items-center justify-center my-10 '>
        <Image unoptimized quality={100} src={img} width={100} height={100} className='w-full' alt='Banner' />
    </div>
  )
}

export default Banner