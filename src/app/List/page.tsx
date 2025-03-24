
"use client"
import CustomTable from "@/components/customTable";
import HorizontalList from "@/components/HorizontalList";
import { NavMain } from "@/components/nav-main";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Avatar } from "@nextui-org/avatar";
import { BookOpen, Bot, ChevronRight, Paperclip, Settings2, SquareTerminal } from "lucide-react"
import React, { useState } from 'react'
// max-h-[calc(100vh-164px)]
const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Playground",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        isActive: true,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        isActive: true,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        isActive: true,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
  }

function page() {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '255px 2fr',
        gap: '1px',
      };
  return (
    <div className="h-[100%] flex flex-col relative">
      <Content/>
        <div style={gridStyle} className="flex flex-1 overflow-y-auto">
        <AppSidebar/>
        <div className="flex m-0 overflow-y-auto scrollbar-hide">
            <div className="flex-1">
                <CustomTable/>           
            </div>
            <AppRightSidebar/>            
        </div>
      </div>
    </div>
  )
}

const Content = () => {
    return (
        <div className="p-2 rounded-none border-0 border-b flex justify-between items-center shadow-none">
        <div className="flex flex-col w-full px-2 py-3">
          {/* Left Side Information */}
          <div>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Case summarization</h2>
              <div className="flex gap-2 ml-auto items-center">
                <Avatar className="w-6 h-6 text-tiny" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Button variant="default" className="bg-cyan-600">Update state</Button>
                <Button variant="outline" className="text-cyan-600">Initiate assessment</Button>
                <Button variant="outline" className="text-cyan-600">Assess risk</Button>
                <Button variant="outline" className="text-cyan-600">Save</Button>
                <Button variant="outline" className="text-cyan-600">360° view</Button>
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

  function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
    return (
      <SidebarGroup className="m-0 p-0 bg-neutral-100 overflow-y-auto scrollbar-hide">
            <SidebarMenu className="gap-0">
              {data.navMain.map((item) => (
                <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
                  <SidebarMenuItem  className="rounded-none m-0">
                    <SidebarMenuButton className="border-y rounded-none m-0" asChild tooltip={item.title}>
                      <a href={item.url}>
                      <CollapsibleTrigger asChild>
                          <SidebarMenuAction className="data-[state=open]:rotate-90">
                            <ChevronRight />
                          </SidebarMenuAction>
                        </CollapsibleTrigger>
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <>
                        <CollapsibleContent>
                          <SidebarMenuSub className="border-0 p-0 mr-0 gap-0">
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem className="border-y m-0 p-0 hover:bg-green-200" key={subItem.title}>                          
                                <SidebarMenuSubButton className="rounded-none hover:bg-green-200" asChild>                            
                                  <a href={subItem.url} className="">
                                    <span>{subItem.title}</span>
                                    <span className="ml-auto text-white text-xs bg-gray-400 py-[2px] px-[4px] rounded-sm">2</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
    )
  }

export default page
