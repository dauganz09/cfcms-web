
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import MenuData from '../components/MenuData';

import {BiDownArrow, BiLeftArrow} from "react-icons/bi";
import { FiArrowDown,FiArrowLeft } from 'react-icons/fi';

 const Sidebar = () => {



    return (
        <div className='hidden lg:sticky lg:top-0  lg:flex bg-white   w-[15vw] h-screen pt-6 pl-6 border-2 border-slate-200'>
          
          <div className='flex flex-col w-full overflow-y-auto'>
                <div className='flex items-center w-full  h-22 '>
                    <Image
                        src='/images/user.jpg'
                        height={40}
                        width={40}
                        className='rounded-full'/>
                </div>

                    <nav className='flex flex-col w-full h-screen my-6'>
                       
                            {MenuData.map(({title, links}, i) =>  {
                                console.log(title);
                                return (
                               <MenuGroup key={i} title={title} links={links} />
                                )
                            })
                               
                        }
                    </nav>

         </div>
                   
          
        </div>
    )
}



export const MenuGroup = ({title , links}) => {

    return (
        <div className='flex flex-col w-full my-4 space-y-2'>
            <span className='uppercase font-light text-xs text-slate-400'>{title}</span>
                {
                    links.map(({linkname, link,icon,active,sublinks}, i) => {
                        return (
                           
                            <MenuItem   key={i} linkname={linkname} Icon={icon} active = {active} link={link} sublinks={sublinks}/>
                        )
                    })
                }
    
        </div>
    )
    

}

export const MenuItem = ({linkname ,link,Icon,active,sublinks}) => {

   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
         setIsOpen(!isOpen);
   }
    
      return (
          
            !sublinks ? (
            <>
            <div className={`relative flex items-center space-x-4 p-2 h-10 text-slate-600     hover:cursor-pointer  group`}>
            
           
                <Icon className={`w-6 h-6 ${active && "text-blue-600"} group-hover:text-blue-600`}/>

                <Link href={link} className=''>
                    
                    <a className={`menu-link ${active && 'text-blue-600'} font-semibold text-[.9em] sm:hidden lg:inline-flex group-hover:text-blue-600 `}>{linkname}</a>
                </Link>
                <span className={`absolute right-0 h-full w-[.3em] scale-x-0  rounded-tl-lg rounded-bl-lg ${active && 'scale-x-100'} bg-blue-600 group-hover:transition duration-100 group-hover:scale-x-100 `}></span>
            </div>
           
           </>
            
            ) : (
                <>
                    <div className={`relative flex items-center justify-around space-x-4 p-2 h-10 text-slate-600 hover:cursor-pointer  group`} onClick={handleClick}>
                    <Icon className={`w-6 h-6 ${active && "text-blue-600"} group-hover:text-blue-600`}/>

                            <Link href={link} className='bg-red-500'>
                                
                                <a className={`menu-link ${(active && isOpen) && 'text-blue-600'} sm:hidden lg:inline-flex font-semibold text-[.9em]  group-hover:text-blue-600 `}>{linkname}</a>
                            </Link>
                            <>
                             {!isOpen ? 
                           
                                <FiArrowLeft className={`group-hover:text-blue-600 w-6 h-6 mr-24`} /> : 
                                <FiArrowDown className={`group-hover:text-blue-600 w-6 h-6 mr-24`} />
                             }
                             </>
                    
                            <span className={`absolute right-0 h-full w-[.3em] scale-x-0  rounded-tl-lg rounded-bl-lg ${active && 'scale-x-100'} bg-blue-600 group-hover:transition duration-100 group-hover:scale-x-100 `}></span>

                    </div>

                 <div className={`${(!isOpen)&& 'hidden'} flex flex-col space-y-4 w-full ml-14`}>
                     {
                         sublinks.map(({sublinkname,sublink},i)=>{

                            return (
                                    <p className='text-gray-800 font-md text-[.8em] hover:text-blue-900 hover:font-semibold'>
                                        <Link href={sublink}>
                                               {sublinkname}
                                        </Link>
                                    </p>
                            )
                         })
                     }
                    
                    
                 </div>
                </>

            )
                
            
        )
    
}


export default Sidebar