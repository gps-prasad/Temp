
import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div className='bg-white'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-2 py-2 overflow-auto">
          <Link
                href={"Home/Administration"}
                className="bg-blue-100 h-44 p-5 flex items-end rounded shadow cursor-pointer hover:bg-blue-200 hover:shadow-md"
                >
                <div>
                  <p className='font-bold text-lg'>Administration</p>
                  <small>Information about administration</small>
                </div>
          </Link>
          <Link
                href={"Home/Academics"}
                className="bg-blue-100 h-44 p-5 flex items-end rounded shadow cursor-pointer hover:bg-blue-200 hover:shadow-md"
                >
                  <div>
                  <p className='font-bold text-lg'>Academics</p>
                  <small>Information about academics</small>
                  </div>
          </Link>
            {[...Array(10)].map((_, index) => (
                <Link
                href={"Home/Administration"}
                key={index}
                className="bg-blue-100 h-44 flex items-center justify-center rounded shadow cursor-pointer hover:bg-blue-200 hover:shadow-md"
                >
                <p className='text-mdPrimary'>Empty Box {index + 1}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}


export default Home
