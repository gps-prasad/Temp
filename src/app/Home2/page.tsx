'use client'
import { Card } from "@/components/ui/card";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { CheckCircle, BookOpen, AlertTriangle, Circle, ArrowUp, Timer } from "lucide-react";
import { HiDotsVertical } from "react-icons/hi";
import BarChart from '@/components/charts/BarChart'
import PieChart from '@/components/charts/PieChart' 
import BarChartStacked from '@/components/charts/BarChartStacked' 


const alerts = [
  { text: "Mathematics algebra pending to take action", color: "text-orange-500", icon: BookOpen },
  { text: "Social science chapter 9 is planned tomorrow", color: "text-orange-500", icon: BookOpen },
  { text: "Science submission is pending", color: "text-red-500", icon: AlertTriangle },
  { text: "General study submission is pending", color: "text-red-500", icon: AlertTriangle },
];

const assignments = [
  { text: "EVS sustainability poster presentation", color: "text-green-500", icon: Timer },
  { text: "Science model tasks approaching due date", color: "text-blue-500", icon: Timer },
  { text: "Olympiad task submission approaching due date", color: "text-indigo-500", icon: Timer },
];

const announcements = [
  "Annual day celebration approaching",
  "Sports day registration is open",
  "Youth festival celebration",
];

const performanceData = [
  { name: "Class IV 2019", value: 100 },
  { name: "Class V 2020", value: 75 },
  { name: "Class VI 2021", value: 65 },
  { name: "Class VII 2022", value: 80 },
  { name: "Class VIII 2023", value: 50 },
  { name: "Class IX 2024", value: 90 },
  { name: "Class X 2025", value: 30 },
];

const attendanceData = [
  { name: "March", present: 20, absent: 5 },
  { name: "April", present: 18, absent: 7 },
  { name: "May", present: 22, absent: 3 },
  { name: "June", present: 19, absent: 6 },
  { name: "July", present: 17, absent: 8 },
  { name: "August", present: 20, absent: 5 },
  { name: "September", present: 23, absent: 2 },
];

const pieData = [
  { name: "Mathematics", value: 30 },
  { name: "English", value: 15 },
  { name: "Science", value: 10 },
  { name: "Social Science", value: 20 },
  { name: "Economy", value: 10 },
];

export default function AcademicDashboard() {
  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hi Theresa!</h1>
          <p className="text-gray-600">"A top performer, a go-getter, enthusiastic creative learner, and persistent."</p>
        </div>
        <Card className="p-4 w-64 border-2 shadow-none bg-transparent">
          <h2 className="text-lg font-semibold">Word of the day</h2>
          <p className="text-xl font-bold">Prudent</p>
          <p className="text-gray-600">‘Avoiding unnecessary risks.’</p>
        </Card>
      </div>

      <Card className="p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Things need your attention!</h2>
            <ul>
              {alerts.map((item, index) => (
                <li key={index} className={`flex items-center gap-2 ${item.color}`}>
                  {item.icon && <item.icon size={16} />} {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Assignments/Projects</h2>
            <ul>
              {assignments.map((item, index) => (
                <li key={index} className={`flex items-center gap-2 ${item.color}`}>
                  {item.icon && <item.icon size={16} />} {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Announcements</h2>
            <ul>
              {announcements.map((text, index) => (
                <li key={index} className="flex items-center gap-2 text-green-500">
                  <ArrowUp size={16} /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Theresa academic</h1>
          <p className="text-gray-600 text-xs">Last refreshed 1m ago</p>
        </div>
        <div className="flex justify-between space-x-2 items-stretch h-10">
          <Button variant="bordered" className="text-cyan-600 border-cyan-600">Edit</Button>
          <Button variant='solid' className="bg-cyan-600 text-white">Share</Button>
          <div className="bg-cyan-600 text-white rounded-lg flex items-center justify-center h-full px-3"><HiDotsVertical/></div>
        </div>
      </div>
          <Tabs aria-label="Academic Performance" color="success" className="w-[100%]" classNames={{tabList: "gap-6 w-[100%] relative rounded-none p-0 border-b border-divider",cursor: "w-full bg-green-400",tab: "max-w-fit w-[100%] px-0 h-12",}} variant="underlined">
            <Tab key="performance" title="My Performance">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 mt-4">
                <div className="">
                  <PieChart />
                </div>
                <div className="max-h-[400px]">
                  <BarChart/>
                </div>
              </div>
              <Card className="p-6 rounded-lg shadow-md mt-6">
              <Tabs aria-label="Academic Performance" color="success" className="w-[100%]" classNames={{tabList: "gap-6 w-[100%] relative rounded-none p-0 border-b border-divider",cursor: "w-full bg-green-400",tab: "max-w-fit w-[100%] px-0 h-12",}} variant="underlined">
            <Tab key="attendance" title="Attendance">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-6 mt-4">
                <div className="">
                  <BarChartStacked/>
                </div>
                <div className="max-h-[400px]">
                  
                </div>
              </div>
            </Tab>
            <Tab key="info-A" title="Info A"><h1>Empty</h1></Tab>
            <Tab key="info-B" title="Info B" ><h1>Empty</h1></Tab>
            <Tab key="info-C" title="Info C" ><h1>Empty</h1></Tab>
          </Tabs>
          </Card>
          </Tab>
          <Tab key="library" title="My Library" ><h1>Empty</h1></Tab>
          <Tab key="goal" title="My Goal" ><h1>Empty</h1></Tab>
          <Tab key="achievements" title="My Achievements" ><h1>Empty</h1></Tab>
          <Tab key="kudos" title="Kudos" ><h1>Empty</h1></Tab>
        </Tabs>
      </Card>
    </div>
  );
}
