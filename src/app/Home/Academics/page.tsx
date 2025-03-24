'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Avatar, ButtonGroup } from '@nextui-org/react';

const classesWithSectionsAndStudents = [
    { class: 'I', sections: ['A', 'B', 'C'], totalStudents: 60 },
    { class: 'II', sections: ['A', 'B'], totalStudents: 90 },
    { class: 'III', sections: ['A', 'B', 'C'], totalStudents: 70 },
    { class: 'IV', sections: ['A', 'B', 'C'], totalStudents: 90 },
    { class: 'V', sections: ['A', 'B', 'C'], totalStudents: 80 },
    { class: 'VI', sections: ['A', 'B', 'C'], totalStudents: 90 },
    { class: 'VII', sections: ['A', 'B'], totalStudents: 100 },
    { class: 'VIII', sections: ['A', 'B', 'C'], totalStudents: 90 },
    { class: 'IX', sections: ['A', 'B', 'C', 'D'], totalStudents: 120 },
    { class: 'X', sections: ['A', 'B', 'C'], totalStudents: 60 },
    { class: 'XI', sections: ['A', 'B', 'C'], totalStudents: 75 },
    { class: 'XII', sections: ['A', 'B', 'C'], totalStudents: 90 }
  ];

interface Class {
    class: string, 
    sections: string[], 
    totalStudents: number
}

type labelsMapType = Record<string,string>


function page() {
    const [selectedOption, setSelectedOption] = React.useState<keyof labelsMapType>("merge");
  
    const labelsMap:labelsMapType = {
      merge: "CBSC",
      squash: "SSC",
      rebase: "Rebase and merge",
    };
  return (
    <div className='bg-white relative'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-2 py-2 overflow-auto">
            {classesWithSectionsAndStudents.map((data, index) => (
                <Box key={index} data={data}/>
            ))}
        </div>
    </div>
  )
}

const Box = ({data}:{data:Class}) => {
    const router = useRouter();
    return (
        <div onClick={()=>router.push(`/Home/Academics/${data.class}`)} className='bg-blue-100 p-5 h-44 hover:bg-blue-200 hover:shadow-md grid grid-rows-[2fr,1fr] grid-cols-[1fr,2fr] gap-y-2'>
            <div>
                <p className=''>Class</p>
                <h1 className='text-6xl'>{data.class}</h1>
            </div>
            <div>
                <p>Total Students</p>
                <p className='text-xl font-light'>{data.totalStudents}</p>
            </div>
            <div className='col-span-2 mt-auto'>
                <p>sections</p>
                <div className='flex justify-start space-x-2'>
                {data.sections.map((section:string,index:number)=>{
                    return (
                        <Link href={`/Home/Academics/${data.class}`} key={index}><Avatar className="w-4 h-4 text-[10px] bg-white hover:bg-green-700 hover:text-white" src="" fallback={section} />
                        </Link>                    
                    )
                })}
                </div>
            </div>

        </div>
    )
}

export default page
