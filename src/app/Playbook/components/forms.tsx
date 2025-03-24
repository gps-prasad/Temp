// "use client"
// import {
//   Dispatch,
//   SetStateAction,
//   useState
// } from "react"
// import {
//   toast
// } from "sonner"
// import {
//   useForm
// } from "react-hook-form"
// import {
//   zodResolver
// } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import {
//   cn
// } from "@/lib/utils"
// import {
//   Button
// } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   Input
// } from "@/components/ui/input"
// import {
//   format
// } from "date-fns"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger
// } from "@/components/ui/popover"
// import {
//   Calendar
// } from "@/components/ui/calendar"
// import {
//   Calendar as CalendarIcon
// } from "lucide-react"
// import {
//   Checkbox
// } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CircleCheckBig, Lock, TimerReset } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react"

// const formSchema = z.object({
//   name_1720899737: z.string().min(1),
//   name_6251765729: z.coerce.date(),
//   name_8462556122: z.coerce.date(),
//   name_1484364286: z.boolean().default(true).optional()
// });

// export function Step1({setStep,setActive}:{setStep:Dispatch<SetStateAction<number>>,setActive:Dispatch<SetStateAction<number>>}) {

//   const form = useForm < z.infer < typeof formSchema >> ({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       "name_6251765729": new Date(),
//       "name_8462556122": new Date(),
//       "name_1484364286": false
//     },
//   })

//   function onSubmit(values: z.infer < typeof formSchema > ) {
//     try {
//       console.log(values);
//       setStep(2)
//       setActive(2)
//       toast(
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//         </pre>
//       );
//     } catch (error) {
//       console.error("Form submission error", error);
//       toast.error("Failed to submit the form. Please try again.");
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
//         <FormField
//           control={form.control}
//           name="name_1720899737"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Academic Year</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder="2023-2024"
                
//                 type=""
//                 {...field} />
//               </FormControl>
              
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <div className="grid grid-cols-12 gap-4">
          
//           <div className="col-span-6">
            
//       <FormField
//       control={form.control}
//       name="name_6251765729"
//       render={({ field }) => (
//         <FormItem className="flex flex-col">
//           <FormLabel>Start Date</FormLabel>
//           <Popover>
//             <PopoverTrigger asChild>
//               <FormControl>
//                 <Button
//                   variant={"outline"}
//                   className={cn(
//                     "w-[240px] pl-3 text-left font-normal",
//                     !field.value && "text-muted-foreground"
//                   )}
//                 >
//                   {field.value ? (
//                     format(field.value, "PPP")
//                   ) : (
//                     <span>Pick a date</span>
//                   )}
//                   <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                 </Button>
//               </FormControl>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar
//                 mode="single"
//                 selected={field.value}
//                 onSelect={field.onChange}
//                 initialFocus
//               />
//             </PopoverContent>
//           </Popover>
       
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//           </div>
          
//           <div className="col-span-6">
            
//       <FormField
//       control={form.control}
//       name="name_8462556122"
//       render={({ field }) => (
//         <FormItem className="flex flex-col">
//           <FormLabel>End Date</FormLabel>
//           <Popover>
//             <PopoverTrigger asChild>
//               <FormControl>
//                 <Button
//                   variant={"outline"}
//                   className={cn(
//                     "w-[240px] pl-3 text-left font-normal",
//                     !field.value && "text-muted-foreground"
//                   )}
//                 >
//                   {field.value ? (
//                     format(field.value, "PPP")
//                   ) : (
//                     <span>Pick a date</span>
//                   )}
//                   <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                 </Button>
//               </FormControl>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar
//                 mode="single"
//                 selected={field.value}
//                 onSelect={field.onChange}
//                 initialFocus
//               />
//             </PopoverContent>
//           </Popover>
       
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//           </div>
          
//         </div>
//         <FormField
//           control={form.control}
//           name="name_1484364286"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
//               <FormControl>
//                 <Checkbox
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
                  
//                 />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel>Is Active</FormLabel>
                
//                 <FormMessage />
//               </div>
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Next</Button>
//       </form>
//     </Form>
//   )
// }


// const formSchema2 = z.object({
//   name_3644979951: z.string().min(1),
//   name_9040831946: z.string().min(1),
//   name_1765424874: z.string(),
//   name_8905708941: z.boolean().default(true).optional()
// });

// export function Step2({setStep,setActive}:{setStep:Dispatch<SetStateAction<number>>,setActive:Dispatch<SetStateAction<number>>}) {

//   const form = useForm < z.infer < typeof formSchema2 >> ({
//     resolver: zodResolver(formSchema2),

//   })

//   function onSubmit(values: z.infer < typeof formSchema2 > ) {
//     try {
//       console.log(values);
//       setStep(3)
//       setActive(3)
//       toast(
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//         </pre>
//       );
//     } catch (error) {
//       console.error("Form submission error", error);
//       toast.error("Failed to submit the form. Please try again.");
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
//         <FormField
//           control={form.control}
//           name="name_3644979951"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Class Name</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder=""
                
//                 type=""
//                 {...field} />
//               </FormControl>
              
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="name_9040831946"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Class Teacher</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder=""
                
//                 type=""
//                 {...field} />
//               </FormControl>
              
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="name_1765424874"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Number of Students</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder=""
                
//                 type="number"
//                 {...field} />
//               </FormControl>
              
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="name_8905708941"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
//               <FormControl>
//                 <Checkbox
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
                  
//                 />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel>Is Active</FormLabel>
                
//                 <FormMessage />
//               </div>
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }

// const formSchema3 = z.object({
//   name_3644979951: z.string().min(1),
//   name_9040831946: z.string().min(1),
//   name_1765424874: z.string(),
//   name_8905708941: z.boolean().default(true).optional()
// });

// export function Step3({setStep,setActive}:{setStep:Dispatch<SetStateAction<number>>,setActive:Dispatch<SetStateAction<number>>}) {

//   const form = useForm < z.infer < typeof formSchema3 >> ({
//     resolver: zodResolver(formSchema3),

//   })

//   function onSubmit(values: z.infer < typeof formSchema3 > ) {
//     try {
//       console.log(values);
//       window.alert('Form successfully submited')
//       toast(
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//         </pre>
//       );
//     } catch (error) {
//       console.error("Form submission error", error);
//       toast.error("Failed to submit the form. Please try again.");
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
//         <FormField
//           control={form.control}
//           name="name_3644979951"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Section Name</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder=""
                
//                 type=""
//                 {...field} />
//               </FormControl>
              
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="name_9040831946"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Belongs to Class</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder=""
                
//                 type=""
//                 {...field} />
//               </FormControl>
              
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="name_1765424874"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Number of Students</FormLabel>
//               <FormControl>
//                 <Input 
//                 placeholder=""
                
//                 type="number"
//                 {...field} />
//               </FormControl>
              
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="name_8905708941"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
//               <FormControl>
//                 <Checkbox
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
                  
//                 />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel>Is Active</FormLabel>
                
//                 <FormMessage />
//               </div>
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   )
// }

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

const Status = ({index,activeSubTask,subTaskIndex}:{index:number,activeSubTask:number,subTaskIndex:number}) => {
  return(<div className="my-1">
{index === subTaskIndex && <p className="flex items-center space-x-2"><TimerReset className="w-5 h-5 text-orange-300"/><span>In-Progress</span></p> }
{index > subTaskIndex && <p className="flex items-center space-x-2"><Lock className="w-5 h-5 text-gray-400" /><span>Pending</span></p> }
{index < subTaskIndex && <p className="flex items-center space-x-2"><CircleCheckBig className="w-5 h-5 text-green-400"  /><span>Completed</span></p> }
</div>)}

export function Step ({tasks,step,setStep,setActive}:{tasks:Task[],step:number,setStep:Dispatch<SetStateAction<number>>,setActive:Dispatch<SetStateAction<number>>}) {
  const [activeSubTask,setActiveSubTask] = useState(0);
  const [subTaskIndex,setSubTaskIndex] = useState(0);

  function onSubmit (i:number) {
    if (tasks[step].subTasks.length>i+1) {
      setSubTaskIndex(i+1)
      setActiveSubTask(i+1)
    }
    else if (tasks.length>step+1) {
      setStep(step+1)
      setSubTaskIndex(0)
      setActiveSubTask(0)
    }
    else {
      window.alert("form Submitted successsfully")
    }
  }

  function onClickPrevious (i:number) {
    if (i>0) {
      setActiveSubTask(i-1)
    }
  }
  return (
    <div className="flex flex-col h-[100%]">
      <h1 className="text-3xl p-2 sticky top-0 shadow rounded-none bg-white">Form Title : Step 1</h1>
      <Accordion variant="splitted" className="overflow-scroll py-2 scrollbar-hide h-[100%]" selectedKeys={[activeSubTask.toString()]}>
      {tasks[step].subTasks.map((u, i) => {
        return (
            <AccordionItem
              data-open={true}
              data-disabled
              key={i}
              aria-label="Connected devices"
              subtitle={<Status index={i} subTaskIndex={subTaskIndex} activeSubTask={activeSubTask}/>}
              title={u.subTaskName}
            >
              <div className="h-[150px] text-2xl flex justify-center">
              </div>
              <div className="flex justify-between w-[100%]">
                <Button onClick={()=>onClickPrevious(i)}>Prev</Button>
                <Button onClick={()=>onSubmit(i)}>Next</Button>
              </div>
            </AccordionItem>
            
            // <CardHeader><p className="text-xs">{subTaskIndex===i+1 && <InProgress/> } </p> Sub Task {i+1}</CardHeader>
            // <CardContent>Form Data</CardContent>
            // <CardFooter>
            // <Button className="bg-cyan-600" onClick={()=>onSubmit(i+1)}>Continue</Button>
            // </CardFooter>            
        )
      })}
      </Accordion>
    </div>
  )
}