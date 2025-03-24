'use client'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

function Administration() {
  return (
    <div className='w-full h-[100%] rounded-sm bg-blue-100 p-4'>
        {[...Array(6)].map((item,index)=>{
            return(
                <CollapsibleSection key={index} title={'Class diary'}/>
            )
        })}
    </div>
  )
}



function CollapsibleSection({ title}:{title:string}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <div className="border border-gray-300 bg-white rounded-md shadow-sm mb-4">
        <button
          onClick={toggleOpen}
          className={`w-full flex justify-between items-center text-left px-4 py-2 rounded-md focus:outline-none transition-transform ${isOpen?'min-h-14':'min-h-28'}`}
        >
            <div>
                <h2 className="text-lg text-mdPrimary font-semibold">{title}</h2>
                <p className='text-mdSecondary'>Information of HR mangement</p>
            </div>
          <span className={`float-right transition-transform text-mdSecondary ${isOpen ? 'rotate-180' : ''}`}>
            <IoMdArrowDropdown/>
          </span>
        </button>
        {isOpen?<hr style={{height:'2px',backgroundColor:'rgb(150,150,150)'}}/>:""}
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out bg-mdSurfaceBright rounded-b-md ${
            isOpen ? 'h-64' : 'h-0'
          }`}
        >
        </div>
      </div>
    );
  }

export default Administration
