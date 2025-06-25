import React, { useState } from 'react'

const Footer = () => {
    const [year] = useState(new Date().getFullYear())
  return (
    <footer className='flex items-center justify-center bg-neutral-900 text-gray-50 md:-mx-28'>
        <div className='py-4'>
            Copyright  © {year}. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer