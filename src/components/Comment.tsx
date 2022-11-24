import React from 'react'
import Avatar1 from '../assets/avatars/avatar1.png'

const Comment = () => {
  return (
    <div className='px-[40px] py-[22px] bg-white border-2 border-black w-[41em] '>
        <div className='flex justify-between'>
            <div className='header-comment flex flex-row gap-2'>
                <div>
                    <img src={Avatar1} alt="avatar" width="65px" height="65px" />
                </div>
                <div>
                    <span className='text-[20px] font-medium'>
                        Marcelo
                    </span>
                    <span className='ml-2'>
                        Hace 1 mes
                    </span>
                </div>
            </div>
            <div className='text-[#ff0303]'>
                Trash
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Comment