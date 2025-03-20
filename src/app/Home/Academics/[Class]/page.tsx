'use client'
import { Input, Pagination } from '@nextui-org/react';
import React, {SelectHTMLAttributes, useEffect, useRef, useState} from 'react'
import { FaSort } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useParams } from 'next/navigation';

interface ColumnWidths {
    col1: number;
    col2: number;
    col3: number;
    col4: number;
    col5: number;
    col6: number;
  }


  const data = [
    { "userId": 1, "societyName": "Green Meadows", "flatNumber": "A101", "username": "john_doe", "email": "john.doe@example.com" },
    { "userId": 2, "societyName": "Sunrise Heights", "flatNumber": "B204", "username": "jane_smith", "email": "jane.smith@example.com" },
    { "userId": 3, "societyName": "Mountain View", "flatNumber": "C301", "username": "mike_jones", "email": "mike.jones@example.com" },
    { "userId": 4, "societyName": "Ocean Breeze", "flatNumber": "D405", "username": "emily_brown", "email": "emily.brown@example.com" },
    { "userId": 5, "societyName": "Maple Grove", "flatNumber": "E506", "username": "alex_wilson", "email": "alex.wilson@example.com" },
    { "userId": 6, "societyName": "Rosewood Gardens", "flatNumber": "F607", "username": "sara_lee", "email": "sara.lee@example.com" },
    { "userId": 7, "societyName": "Green Meadows", "flatNumber": "A102", "username": "lucas_miller", "email": "lucas.miller@example.com" },
    { "userId": 8, "societyName": "Sunrise Heights", "flatNumber": "B205", "username": "chloe_white", "email": "chloe.white@example.com" },
    { "userId": 9, "societyName": "Mountain View", "flatNumber": "C302", "username": "ryan_taylor", "email": "ryan.taylor@example.com" },
    { "userId": 10, "societyName": "Ocean Breeze", "flatNumber": "D406", "username": "laura_clark", "email": "laura.clark@example.com" },
    { "userId": 11, "societyName": "Maple Grove", "flatNumber": "E507", "username": "adam_davis", "email": "adam.davis@example.com" },
    { "userId": 12, "societyName": "Rosewood Gardens", "flatNumber": "F608", "username": "natalie_johnson", "email": "natalie.johnson@example.com" },
    { "userId": 13, "societyName": "Green Meadows", "flatNumber": "A103", "username": "ethan_lee", "email": "ethan.lee@example.com" },
    { "userId": 14, "societyName": "Sunrise Heights", "flatNumber": "B206", "username": "olivia_moore", "email": "olivia.moore@example.com" },
    { "userId": 15, "societyName": "Mountain View", "flatNumber": "C303", "username": "mason_roberts", "email": "mason.roberts@example.com" },
    { "userId": 16, "societyName": "Ocean Breeze", "flatNumber": "D407", "username": "grace_martin", "email": "grace.martin@example.com" },
    { "userId": 17, "societyName": "Maple Grove", "flatNumber": "E508", "username": "harry_wilson", "email": "harry.wilson@example.com" },
    { "userId": 18, "societyName": "Rosewood Gardens", "flatNumber": "F609", "username": "zoe_scott", "email": "zoe.scott@example.com" },
    { "userId": 19, "societyName": "Green Meadows", "flatNumber": "A104", "username": "jackson_harris", "email": "jackson.harris@example.com" },
    { "userId": 20, "societyName": "Sunrise Heights", "flatNumber": "B207", "username": "maria_lee", "email": "maria.lee@example.com" },
    { "userId": 21, "societyName": "Mountain View", "flatNumber": "C304", "username": "oliver_kelly", "email": "oliver.kelly@example.com" },
    { "userId": 22, "societyName": "Ocean Breeze", "flatNumber": "D408", "username": "isabella_thompson", "email": "isabella.thompson@example.com" },
    { "userId": 23, "societyName": "Maple Grove", "flatNumber": "E509", "username": "ella_taylor", "email": "ella.taylor@example.com" },
    { "userId": 24, "societyName": "Rosewood Gardens", "flatNumber": "F610", "username": "james_kim", "email": "james.kim@example.com" },
    { "userId": 25, "societyName": "Green Meadows", "flatNumber": "A105", "username": "noah_morris", "email": "noah.morris@example.com" },
    { "userId": 26, "societyName": "Sunrise Heights", "flatNumber": "B208", "username": "madison_carter", "email": "madison.carter@example.com" },
    { "userId": 27, "societyName": "Mountain View", "flatNumber": "C305", "username": "benjamin_evans", "email": "benjamin.evans@example.com" },
    { "userId": 28, "societyName": "Ocean Breeze", "flatNumber": "D409", "username": "charlotte_perez", "email": "charlotte.perez@example.com" },
    { "userId": 29, "societyName": "Maple Grove", "flatNumber": "E510", "username": "joseph_hall", "email": "joseph.hall@example.com" },
    { "userId": 30, "societyName": "Rosewood Gardens", "flatNumber": "F611", "username": "matthew_garcia", "email": "matthew.garcia@example.com" },
    { "userId": 31, "societyName": "Green Meadows", "flatNumber": "A106", "username": "hannah_wilson", "email": "hannah.wilson@example.com" },
    { "userId": 32, "societyName": "Sunrise Heights", "flatNumber": "B209", "username": "william_jackson", "email": "william.jackson@example.com" },
    { "userId": 33, "societyName": "Mountain View", "flatNumber": "C306", "username": "mia_martin", "email": "mia.martin@example.com" },
    { "userId": 34, "societyName": "Ocean Breeze", "flatNumber": "D410", "username": "elijah_anderson", "email": "elijah.anderson@example.com" },
    { "userId": 35, "societyName": "Maple Grove", "flatNumber": "E511", "username": "lucy_walker", "email": "lucy.walker@example.com" },
    { "userId": 36, "societyName": "Rosewood Gardens", "flatNumber": "F612", "username": "sophie_smith", "email": "sophie.smith@example.com" },
    { "userId": 37, "societyName": "Green Meadows", "flatNumber": "A107", "username": "jack_lee", "email": "jack.lee@example.com" },
    { "userId": 38, "societyName": "Sunrise Heights", "flatNumber": "B210", "username": "amelia_king", "email": "amelia.king@example.com" },
    { "userId": 39, "societyName": "Mountain View", "flatNumber": "C307", "username": "liam_martinez", "email": "liam.martinez@example.com" },
    { "userId": 40, "societyName": "Ocean Breeze", "flatNumber": "D411", "username": "sofia_brown", "email": "sofia.brown@example.com" },
    { "userId": 41, "societyName": "Maple Grove", "flatNumber": "E512", "username": "aiden_jones", "email": "aiden.jones@example.com" },
    { "userId": 42, "societyName": "Rosewood Gardens", "flatNumber": "F613", "username": "victoria_harris", "email": "victoria.harris@example.com" },
    { "userId": 43, "societyName": "Green Meadows", "flatNumber": "A108", "username": "ella_wood", "email": "ella.wood@example.com" },
    { "userId": 44, "societyName": "Sunrise Heights", "flatNumber": "B211", "username": "jackson_smith", "email": "jackson.smith@example.com" },
    { "userId": 45, "societyName": "Mountain View", "flatNumber": "C308", "username": "henry_adams", "email": "henry.adams@example.com" },
    { "userId": 46, "societyName": "Ocean Breeze", "flatNumber": "D412", "username": "lucas_martinez", "email": "lucas.martinez@example.com" },
    { "userId": 47, "societyName": "Maple Grove", "flatNumber": "E513", "username": "mila_moore", "email": "mila.moore@example.com" },
    { "userId": 48, "societyName": "Rosewood Gardens", "flatNumber": "F614", "username": "daniel_jackson", "email": "daniel.jackson@example.com" },
    { "userId": 49, "societyName": "Green Meadows", "flatNumber": "A109", "username": "ella_davis", "email": "ella.davis@example.com" },
    { "userId": 50, "societyName": "Sunrise Heights", "flatNumber": "B212", "username": "oscar_brown", "email": "oscar.brown@example.com" }
  ]
  export type User = {
    userId: number;
    societyName: string;
    flatNumber: string;
    username: string;
    email: string;
  };

function page() {
    const params = useParams();
    const { Class } = params
    const [columnWidths, setColumnWidths] = useState<ColumnWidths>({
        col1: 100,
        col2: 100,
        col3: 100,
        col4: 100,
        col5: 100,
        col6: 100,
      });
    const [users,setUsers] = useState<User[] | undefined>();
    const [filteredUsers,setFilteredUsers] = useState<User[] | undefined>();
    const [loading, setLoading] = useState(true); 
    const [rows,setRows] = useState<number>(10);
    const [editingField,setEditingField] = useState<{row:string,field:string}>({row:'',field:''});
    const [editedValue, setEditedValue] = useState<User>({  userId: -1, societyName: "", flatNumber: "", username: "", email: ""});
    const [selectedUsers,setSelectedUsers] = useState<string[]>([]);
    const [showFilters,setShowFilters] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages,setTotalPages] = useState<number>(0);
    const totalUsers = useRef<number>(0);
    const [orderASC,setOrderASC] = useState<Record<string,boolean>>({userId:false,societyName:true,flatNumber:true,username:true,email:true});
    const filterValues = useRef<Record<string,string>>({  userId: "", societyName: "", flatNumber: "", username: "", email: ""})



    const fetchUsers = async (queryParams?:Record<string, string>) => {
        try {
          setLoading(true)
          console.log(queryParams)
          // const response = await fetch(`http://localhost:3001/api/v1/user/get_users?limit=10&page=${page}&user_id=${queryParams.name_7675426454}&society_name=${queryParams.name_5210461898}&flat=${queryParams.name_6281908007}&name=${queryParams.name_1516508596}&email=${queryParams.name_7674608126}`);
          // if (!response.ok) {
          //   throw new Error('Failed to fetch users');
          // }
          // const data = await response.json();
          // console.log(data)
          setUsers(data); 
          setFilteredUsers(data)
          totalUsers.current = data.length
          countPages()
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message); 
          }
        } finally {
          setLoading(false); 
        }
      }

    const handleEdit = (e:React.ChangeEvent<HTMLInputElement>,row:number,key:keyof User):void => {
        if (row!==editedValue.userId) {return}
    setEditedValue((prev)=>({...prev,[key]:e.target.value}))
    }

    const filterUsers = () => {
      if (!users) return
      if (!filterValues.current.userId && !filterValues.current.username && !filterValues.current.email) {
        totalUsers.current = users.length
        setFilteredUsers([...users])
        countPages()
        return
      }
      const newUsers = users.filter((user)=> {
        if ((!filterValues.current.username || user.username.toLowerCase().includes(filterValues.current.username)) && (!filterValues.current.userId || String(user.userId)===filterValues.current.userId) && (!filterValues.current.email || user.email.toLowerCase().includes(filterValues.current.email)) )
          {
            return user
          }
        })
      totalUsers.current = newUsers.length
      countPages()
      setFilteredUsers([...newUsers])
    }

    const saveData = () => {
        console.log(editedValue)
        if (users && editedValue) {
            setUsers((prev)=>prev?.map((user)=>user.userId===editedValue.userId?editedValue:user))
        }
        if (filteredUsers && editedValue) {
            setFilteredUsers((prev)=>prev?.map((user)=>user.userId===editedValue.userId?editedValue:user))
        }
        setEditingField({row:'',field:''})
        setEditedValue({  userId: -1, societyName: "", flatNumber: "", username: "", email: ""})
    }

    const selectAll = (e:React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked && filteredUsers) {
        const selected = filteredUsers.slice((currentPage-1)*10,currentPage*10).map(user=>user.userId.toString());
        setSelectedUsers([...selectedUsers,...selected])
      }
      if (!e.target.checked && filteredUsers) {
        setSelectedUsers([])
      }
      return
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Check if the pressed key is "Enter"
        if (event.key === 'Enter') {
            saveData()
          console.log('Enter key was pressed');
        }
        else if (event.key === 'Escape') {
            setEditingField({row:'',field:''})
            setEditedValue({  userId: -1, societyName: "", flatNumber: "", username: "", email: ""})
        }
    };

    const countPages = () => {
      setTotalPages(Math.floor(totalUsers.current/rows))
      if (totalUsers.current%rows) {
        setTotalPages((prev)=>prev+1)
      }
    }

    const toggleCheckBox = (e:React.ChangeEvent<HTMLInputElement>,id:string) => {
    
      if (e.target.checked) {
        // If element is not found, add it
        setSelectedUsers([...selectedUsers,id])
      } else {
        // If element is found, remove it
        const users = selectedUsers.filter((ID,index)=>ID!==id)
        setSelectedUsers([...users])
      }
    }
    

    useEffect(()=>{
        fetchUsers()
      },[])

    function sortUsers(key:keyof User): void {
    const reorderedUsers:(User[] | undefined) = filteredUsers?.sort((a, b) => {
        const A = a[key] || ''
        const B = b[key] || ''
        if (typeof A === 'string' && typeof B === 'string') {
        if (orderASC[key]) {
            return A.localeCompare(B);  // Ascending order
        } else{
            return B.localeCompare(A);  // Descending order
        }
        }
        if (typeof A === 'number' && typeof B === 'number') {
        return orderASC[key] ? A - B : B - A;  // For numbers, ascending/descending order
        }
        return 0
    });
    if (!reorderedUsers) return
    setFilteredUsers([...reorderedUsers])
    setOrderASC({...orderASC,[key]:!orderASC[key]})
    }

  return (
    <div className='w-[100%] p-5 shadow-lg border rounded-sm'>
        <div>
            <div className='text-2xl'>{Class} Section B <span className='bg-gray-300 text-sm p-1 align-middle'>34</span></div>
            <p className='text-xs'>Last Updated : 12-26-2024</p>
        </div>
        <hr className='mt-4 mb-2'/>
        <div className='overflow-x-auto px-4'>
      <div className="overflow-x-auto min-w-[600px]">
      <div className="grid grid-cols-[1fr,1fr,2fr,3fr,2fr,2fr,2fr] gap-0.5 px-5 w-full font-bold my-1">
        {/* Heading */}
        <div className='text-start py-2 space-x-2 flex text-violet-400 hover:text-violet-600 cursor-pointer'><input className='bg-violet-200' type='checkbox' onChange={selectAll}/><FiSearch size={25} onClick={()=>setShowFilters((prev)=>!prev)}/></div>
        <div className='text-start text-sm truncate py-2 bg-white min-w-[100px] max-w-[100%] px-1 hover:bg-gray-200 rounded-sm cursor-pointer flex items-center' style={{ width: `${columnWidths.col1}%` }} onClick={()=>sortUsers('userId')}>ID<FaSort className='ml-2'/></div>
        <div className='text-start text-sm truncate py-2 bg-white min-w-[100px] max-w-[100%] px-1 hover:bg-gray-200 rounded-sm cursor-pointer flex items-center' style={{ width: `${columnWidths.col2}%` }} onClick={()=>sortUsers("username")}>Name<FaSort className='ml-2'/></div>
        <div className='text-start text-sm truncate py-2 bg-white min-w-[100px] max-w-[100%] px-1 hover:bg-gray-200 rounded-sm cursor-pointer flex items-center' style={{ width: `${columnWidths.col3}%` }} onClick={()=>sortUsers("email")}>Email addresss<FaSort className='ml-2'/></div>
        <div className='text-start text-sm truncate py-2 bg-white min-w-[100px] max-w-[100%] px-1 hover:bg-gray-200 rounded-sm cursor-pointer' style={{ width: `${columnWidths.col4}%` }}>Optional 1</div>
        <div className='text-start text-sm truncate py-2 bg-white min-w-[100px] max-w-[100%] px-1 hover:bg-gray-200 rounded-sm cursor-pointer' style={{ width: `${columnWidths.col5}%` }}>Optional 1</div>
        <div className='text-start text-sm truncate py-2 bg-white min-w-[100px] max-w-[100%] px-1 hover:bg-gray-200 rounded-sm cursor-pointer' style={{ width: `${columnWidths.col6}%` }}>Optional 1</div>
      </div>
      {/* Filters */}
      {showFilters && <div className="grid grid-cols-[1fr,1fr,2fr,3fr,2fr,2fr,2fr] gap-0.5 px-5 w-full my-1 py-1 bg-gray-200">
        <div className='text-start py-2 space-x-2 flex text-violet-400 hover:text-violet-600 cursor-pointer'></div>
        <div className='text-start border shadow-sm bg-white min-w-[100px] max-w-[90%] px-1 rounded-sm' style={{ width: `${columnWidths.col1}%` }}><input className='w-[100%] p-1 outline-none' placeholder='ID' onChange={(e)=>{filterValues.current.userId=e.target.value.toLowerCase().trim()}}  onKeyDown={(e)=>{if (e.key==='Enter'){filterUsers()}}}/></div>
        <div className='text-start border shadow-sm bg-white min-w-[100px] max-w-[90%] px-1 rounded-sm cursor-pointer flex items-center' style={{ width: `${columnWidths.col2}%` }}><input className='w-[100%] p-1 outline-none' placeholder='Name' onChange={(e)=>{filterValues.current.username=e.target.value.toLowerCase().trim()}} onKeyDown={(e)=>{if (e.key==='Enter'){filterUsers()}}}/></div>
        <div className='text-start border shadow-sm bg-white min-w-[100px] max-w-[90%] px-1 rounded-sm cursor-pointer flex items-center' style={{ width: `${columnWidths.col3}%` }}><input className='w-[100%] p-1 outline-none' placeholder='Email' onChange={(e)=>filterValues.current.email=e.target.value.toLowerCase().trim()} onKeyDown={(e)=>{if (e.key==='Enter'){filterUsers()}}}/></div>
        <div className='text-start border shadow-sm bg-white min-w-[100px] max-w-[90%] px-1 rounded-sm cursor-pointer' style={{ width: `${columnWidths.col4}%` }}><input className='w-[100%] p-1 outline-none' placeholder='Optional 1'/></div>
        <div className='text-start border shadow-sm bg-white min-w-[100px] max-w-[90%] px-1 rounded-sm cursor-pointer' style={{ width: `${columnWidths.col5}%` }}><input className='w-[100%] p-1 outline-none' placeholder='Optional 1'/></div>
        <div className='text-start border shadow-sm bg-white min-w-[100px] max-w-[90%] px-1 rounded-sm cursor-pointer' style={{ width: `${columnWidths.col6}%` }}><input className='w-[100%] p-1 outline-none' placeholder='Optional 1'/></div>
      </div>}

        {/* Body */}
        {filteredUsers && filteredUsers.slice((currentPage-1)*10,currentPage*10).map((user,id)=>{
          return (
            <div className={`grid grid-cols-[1fr,1fr,2fr,3fr,2fr,2fr,2fr] gap-0.5 py-2 px-5 hover:bg-violet-200 hover:border-b hover:text-violet-600 hover:border-b-violet-400 ${id%2===1?"bg-gray-100":"bg-white"}`} key={user.userId}>
              <div className='text-start'><input checked={selectedUsers.includes(user.userId.toString())} onChange={(e)=>toggleCheckBox(e,user.userId.toString())} type='checkbox'/></div>
              <div className={`text-start text-sm truncate min-w-[100px] max-w-[100%] px-1`} style={{ width: `${columnWidths.col1}%`, }} >{user.userId}</div>
              <div className={`text-start text-sm truncate min-w-[100px] max-w-[100%] px-1 text-violet-600`} style={{ width: `${columnWidths.col2}%`, }} onDoubleClick={()=>{if (editingField.row===String(user.userId) && editingField.field==='username') {return} setEditingField({row:user.userId.toString(),field:'username'});setEditedValue(user)}}>{editingField.row===String(user.userId) && editingField.field==='username'?<input className="pb-0 w-[100%] px-1 border border-neutral-500 focus:outline-none rounded-sm bg-neutral-50" onChange={(e)=>handleEdit(e,user.userId,"username")} onKeyDown={handleKeyDown} defaultValue={user.username}/>:user.username}</div>
              <div className={`text-start text-sm truncate min-w-[100px] max-w-[100%] px-1`} style={{ width: `${columnWidths.col3}%`, }} onDoubleClick={()=>{if (editingField.row===String(user.userId) && editingField.field==='email') {return} setEditingField({row:user.userId.toString(),field:'email'});setEditedValue(user)}}>{editingField.row===String(user.userId) && editingField.field==='email'?<input className="pb-0 w-[100%] px-1 border shadow-sm border-neutral-500 focus:outline-none rounded-sm bg-neutral-50" onChange={(e)=>handleEdit(e,user.userId,"email")} onKeyDown={handleKeyDown} defaultValue={user.email}/>:user.email}</div>
              <div className={`text-start text-sm truncate min-w-[100px] max-w-[100%] px-1`} style={{ width: `${columnWidths.col4}%`, }}>Optional 1</div>
              <div className={`text-start text-sm truncate min-w-[100px] max-w-[100%] px-1`} style={{ width: `${columnWidths.col5}%`, }}>Optional 1</div>
              <div className={`text-start text-sm truncate min-w-[100px] max-w-[100%] px-1`} style={{ width: `${columnWidths.col6}%`, }}>Optional 1</div>
            </div>
          )
        })}
        </div>
      </div>
      <div className='mb-2 mt-4 w-[100%]'>
        {totalPages===1?<></>:<Pagination showControls variant="bordered" classNames={{cursor:'bg-violet-600',wrapper:'mx-auto'}} initialPage={1} total={totalPages} onChange={setCurrentPage}/>}
      </div>
    </div>
  )
}

export default page
