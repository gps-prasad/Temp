"use client"
import React, { useState } from 'react';
import { CiGlobe, CiBellOn, CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Link from 'next/link';


// function Header() {
//   const [isSearchBarOpen,setIsSearchBarOpen] = useState<boolean>(false);
//   return (
    // <div className='fixed bg-white top-0 left-0 w-full h-24 z-50'>
    // <div className='flex flex-row bg-gray-100 justify-between shadow px-3 py-4 h-16 '>
    //   <div className='flex flex-row space-x-2 items-center'>
    //     <div className='text-mdPrimary'><CiGlobe size={30}/></div>
    //     <h1 className='font-bold'>ABC Public School Gochibouli</h1>
    //   </div>
    //   <div className='flex space-x-2'>
    //     <div className={`bg-neutral-200 flex p-1 rounded-full cursor-pointer`}>
    //       <input className={`bg-neutral-200 transition-max-width duration-500 ease-in-out ${isSearchBarOpen?'w-full':'w-0 hidden' }  px-2 border-0 outline-0 py-1`} placeholder='Search'/>
    //       <IoIosSearch onClick={()=>setIsSearchBarOpen(!isSearchBarOpen)} size={25}/>
    //     </div>
    //     <div className='bg-neutral-200 p-1 rounded-full cursor-pointer bg-mdPrimaryContainer'><CiBellOn size={25}/></div>
    //     <Link href='/Profile' className='bg-neutral-200 p-1 rounded-full cursor-pointer bg-mdPrimaryContainer'><CiUser size={25}/></Link>
    //   </div>
    // </div>
    // <BreadCrumbsComponent/>
    // </div>
//   )
// }

// export default Header


import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Header({children}:{children:React.ReactNode}) {
  const [isSearchBarOpen,setIsSearchBarOpen] = useState<boolean>(false);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex fixed top-0 left-0 right-0 h-12 bg-black text-white shrink-0 items-center gap-2 transition-[width,padding]">
        <div className='w-full'>
          <div className="flex items-center gap-2 px-4 shadow">
              <div className='flex flex-row w-[100%] justify-between px-3 py-1 h-12 '>
                <div className='flex flex-row space-x-2 items-center'>
                  <div className='text-mdPrimary'><CiGlobe size={30}/></div>
                  <h1 className='font-bold'>ABC Public School Gochibouli</h1>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className={`flex items-center p-1 rounded-full bg-neutral-200 text-black cursor-pointer`}>
                    <input className={`transition-max-width duration-500 ease-in-out bg-neutral-200 ${isSearchBarOpen?'w-full':'w-0 hidden' }  px-2 border-0 outline-0 py-1 h-5`} placeholder='Search'/>
                    <IoIosSearch onClick={()=>setIsSearchBarOpen(!isSearchBarOpen)} size={25}/>
                  </div>
                  <div className='p-1 rounded-full cursor-pointer bg-mdPrimaryContainer'><CiBellOn size={25}/></div>
                  <Link href='/Profile' className='p-1 rounded-full cursor-pointer bg-mdPrimaryContainer'><CiUser size={25}/></Link>
                </div>
              </div>   
          </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
              {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}


