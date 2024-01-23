import React from 'react'
import  filterData  from '../assets/data/dataFilter'

const Filter = () => {
  return (
    <div className='flex'>
      {
        filterData.map((data,i)=>(
          <div key={i}>{data.name}</div>
        ))
      }
    </div>
  )
}

export default Filter
