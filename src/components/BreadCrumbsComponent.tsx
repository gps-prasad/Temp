"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React from 'react';

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
  

const BreadCrumbsComponent = () => {
    const pathname = usePathname()
    const pathnames = pathname.split('/').filter(Boolean);
    let breadcrumbPath = "";


    return (
        <Breadcrumbs underline="hover" className="ml-6 py-1 h-6">
            {pathnames.map((name,index)=>{
                breadcrumbPath += `/${name}`;
                const isLast = index === pathnames.length - 1;
                return (
                    <BreadcrumbItem className={`${isLast?"font-bold":""} outline-none`} startContent={index===0?<FaHome size={18} className="mr-2 text-center" />:<></>} key={name} href={breadcrumbPath}>{name}</BreadcrumbItem>
                )
            })}
        </Breadcrumbs>
    )
};

export default BreadCrumbsComponent;