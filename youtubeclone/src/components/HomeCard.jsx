import React from 'react'
import images from '../assets/images/images'

const HomeCard = () => {
  return (
    <div className='w-[300px] m-3'>
        <img src={images.deneme} alt="" />
        <div className='font-bold mt-1'>Title Title Title Title Title Title</div>
        <div className='mt-1'>Harun Özdemir</div>
        <div className='text-sm text-gray-700 mt-1 tracking-wider'>
          <span>100K Görüntülenme</span>
          <span>1 Yıl Önce</span>
        </div>
    </div>
  )
}

export default HomeCard
