import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Container = ({children}) => {
    return (
        <div className=' flex h-full w-[100%]  font-montserrat bg-white'>
            <Sidebar/>
            <div className='relative flex flex-col h-[100vh] overflow-auto lg:w-[85vw] w-full'>
                <Header/>
                <div className='flex flex-col p-6 mt-[6em] w-[100%] h-screen z-0 overflow-auto '>
                    {children}
                </div>

            </div>
            
        </div>
    )
}

export default Container
