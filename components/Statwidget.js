import Image from 'next/image'
import React from 'react'
import {FiArrowDownRight, FiArrowUpRight} from 'react-icons/fi'

const Statwidget = ({title,num,label,percent,img,color,status}) => {
    return (
        <div className={`flex flex-col h-[70%] px-2 bg-white  justify-center   shadow-md ${color} cursor-pointer transform hover:scale-105 transition duration-200`}>
           <div className='font-normal text-[.8em] text-slate-800'>{title}</div>
            <div className='flex items-center '>
                <h1 className='font-extrabold text-[1.5em]'>{num}</h1>
                <div className={`flex items-center font-light text-gray-700 justify-center text-[.7em]  ml-2 w-10 h-4 rounded-full ${status ? 'bg-green-200' : 'bg-red-200'} `}> {percent} {status ? <FiArrowUpRight/> : <FiArrowDownRight/>} </div>
            </div> 
             <p className='text-[.7em] text-slate-400'>{label}</p>
             {/* <Image 
                src={img}
                height={40}
                width={40}
                layout='fixed'
             /> */}
        </div>
    )
}

export default Statwidget
