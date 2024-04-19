import Sidebar from './Sidebar'
import Static from './Static'
import Topbar from './Topbar'

export default function Dashboard() {
  return (
    <div className='max-w-[1920px] h-screen flex my-0 mx-auto'>
        <Sidebar />
        <div className='flex flex-col w-full'>
            <Topbar />
            <Static />
        </div>
    </div>
  )
} 
