// import  from 'react'
import Sidebar from '../Dashboard/Sidebar'
import CreateTop from './CreateTop'
import Createdata from './Createdata'

export default function Createorder() {
  return (
    <div className='max-w-[1920px] h-screen flex my-0 mx-auto'>
        <Sidebar />
        <div className='flex flex-col w-full'>
            <CreateTop />
            <Createdata />
            {/* <Stopwatch /> */}
        </div>
    </div>
  )
}
