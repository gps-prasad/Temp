
"use client"
import CustomTable from "@/components/customTable";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Circle } from "lucide-react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import {Sidebar} from "@/components/ui/sidebar"
import { BookOpen, Bot, ChevronRight, Paperclip, Settings2, SquareTerminal } from "lucide-react"
import React, { useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";2
import { Step } from "./components/forms";

type Task = {
  id: number;
  taskName: string;
  subTasks: SubTask[];
};

type SubTask = {
  id: number;
  subTaskName: string;
  completed: boolean;
};

const tasks: Task[] = [
  {
    id: 1,
    taskName: "Project Setup",
    subTasks: [
      { id: 1, subTaskName: "Initialize Git repository", completed: false },
      { id: 2, subTaskName: "Create project structure", completed: false },
      { id: 3, subTaskName: "Install dependencies", completed: false },
    ],
  },
  {
    id: 1,
    taskName: "Project Setup",
    subTasks: [
      { id: 1, subTaskName: "Initialize Git repository", completed: false },
      { id: 2, subTaskName: "Create project structure", completed: false },
      { id: 3, subTaskName: "Install dependencies", completed: false },
    ],
  },
  {
    id: 2,
    taskName: "Design UI",
    subTasks: [
      { id: 1, subTaskName: "Create wireframes", completed: true },
      { id: 2, subTaskName: "Choose color scheme", completed: false },
      { id: 3, subTaskName: "Design responsive layout", completed: false },
    ],
  },
  {
    id: 3,
    taskName: "Develop Backend",
    subTasks: [
      { id: 1, subTaskName: "Set up database", completed: false },
      { id: 2, subTaskName: "Build API endpoints", completed: false },
      { id: 3, subTaskName: "Implement authentication", completed: false },
    ],
  },
];


function page() {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '250px 2fr',
    gap: '1px',
  };
  return (
    <div className="h-[100%] flex flex-col">
      <Content/>
      <div className="flex-1 flex flex-col overflow-y-scroll scrollbar-hide">
      <Tabs aria-label="Academic Performance" color="success" className="w-[100%]" classNames={{tabList: "gap-6 w-[100%] h-[32px] relative rounded-none px-2 py-0 border-b border-divider",cursor: "w-full bg-green-400",tab: "max-w-fit w-[100%] px-0",panel:'bg-white overflow-auto scrollbar-hide'}} variant="underlined">
          <Tab className="p-0 flex-1" key="Playbook" title="Playbook">
            <PlayBook/>
          </Tab>
          <Tab key="info-A" title="Info A"><h1>Empty</h1></Tab>
          <Tab key="info-B" title="Info B" ><h1>Empty</h1></Tab>
          <Tab key="info-C" title="Info C" ><h1>Empty</h1></Tab>
      </Tabs>
      </div>
    </div>
  )
}

const Content = () => {
    return (
        <div className="p-2 max-h-[100px] rounded-none border-0 flex justify-between items-center shadow-none">
        <div className="flex flex-col w-full px-2 py-3">
          {/* Left Side Information */}
          <div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Create New Acaedemic calender</h2>
              <div className="flex gap-2 ml-auto items-stretch">
                <Button variant="flat" className="text-cyan-600">Save</Button>
                <div className="bg-cyan-600 text-white rounded-lg flex items-center justify-center h-full px-3"><HiDotsVertical/></div>
                {/* <HorizontalList/> */}
              </div>
            </div>
          </div>
          <div className="flex gap-5">          
            <p className="text-sm text-gray-500">Record type <strong className="block">AI system</strong></p>
            <p className="text-sm text-gray-500">Number <strong className="block">AIS0001010</strong></p>
            <p className="text-sm text-gray-500">
              Business owner 
              <a href="#" className="text-blue-600 hover:underline block"> Josh Labelle</a>
            </p>
            <p className="text-sm text-gray-500">State <strong className="block">Review for monitor</strong></p>
          </div>
        </div>
      </div>
    )
  }

  function AppRightSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [active,setActive] = useState('');
    const toggleActive = () => {
        if (active === ""){
            setActive('attachements')
        }
        else {
            setActive('')
        }
    }
    return (
        <div style={{backgroundColor:'#B9DBE4'}} className={`sticky h-[100%] ${active === 'attachements' && "w-80"} pt-5 top-0 right-0`}>
            <div className="flex justify-between">
            <div className={`flex-1 ${active === 'attachements'?"block":"hidden"}`}>
                file uploader
            </div>
            <div className="space-y-5">
                <div onClick={toggleActive} className="border-l-4 px-1 border-green-600">
                  <div className="bg-white p-1 rounded-full">
                    <Paperclip strokeWidth={1.5} />
                  </div>
                </div>
            </div>
            </div>
        </div>
    )
  }

  function AppSidebar({ step,active }: { step:number,active:number }) {
  
    return (
      <div className="w-[100%] h-[100%] p-4 rounded-none border-r overflow-y-auto scrollbar-hide">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold overflow-ellipsis">Incident Response Demo</h2>
          <Circle className="w-4 h-4" />
      </div>
      <CardContent className="p-0 space-y-2">
        {tasks.map((s, index) => (
          <Button key={index} variant={"ghost"} isDisabled={step<index} className={`flex w-[100%] py-8 text-black items-center space-x-2 border cursor-pointer ${step===index?"bg-green-200":"bg-neutral-50"}`}>
            {step>=index ? (
               <Circle className={`w-6 h-6 ${step>index?"text-green-500":"text-orange-400"}`} />
            ) : (
              <Lock className="w-6 h-6 text-gray-400" />
            )}
            <div className="w-full flex flex-col">
              <span className="text-sm font-medium">{s.taskName}</span>
              <span className="text-xs text-neutral rounded-md">
                {s.subTasks.length} remaining
              </span>
            </div>
          </Button>
        ))}
      </CardContent>
    </div>
    )
  }

function PlayBook() {
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const submitForm = () => alert("Form Submitted!");

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '250px 2fr',
    gap: '1px',
  };

  return (
    <div style={gridStyle} className="h-[100%] flex-1 overflow-auto scrollbar-hide">
    <AppSidebar step={step} active={active}/>
    <div className="flex w-[100%] h-[100%] m-0 overflow-auto">
        <div className="flex-1 h-[100%] overflow-scroll scrollbar-hide">
          <Step tasks={tasks} step={step} setStep={setStep} setActive={setActive}/>            
        </div>
        <AppRightSidebar/>    
    </div>
    </div>  
  )
}

export default page
