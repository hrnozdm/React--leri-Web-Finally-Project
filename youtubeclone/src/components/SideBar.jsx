import React from 'react'
import dataSide from '../assets/data/dataSide'

const SideBar = () => {
  return (
    <div className='max-w-[240px] p-2 space-y-3 border-r h-screen '>
      {
        dataSide.map((data,i)=>(
            <div className='flex items-center space-x-5 p-2 hover:bg-gray-200 cursor-pointer'>
                <span>{data.icon}</span>
                <span>{data.name}</span>
            </div>
        ))
      }
    </div>
  )
}

export default SideBar