import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='fixed top-0  bg-white flex items-center w-[100%] h-24 z-[1000]  overflow-hidden px-6 '>
            <Image 
                src="/images/user.jpg"
                width={50}
                height={50}
                className='rounded-full border-2 border-solid border-cyan-500'

            />
            <div className='flex flex-col ml-4 py-0'>
                <span className='text-gray-800   font-bold  text-2xl'>
                    Welcome, <span className='text-gray-700 font-medium text-md'>John Doe</span>
                </span>
                <span className='text-sm'>
                    Administrator
                </span>
               
            </div>
            
        </div>
    )
}

export default Header
