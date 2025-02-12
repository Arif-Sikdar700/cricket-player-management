import React from 'react'
import { MdDeleteForever } from "react-icons/md";
export default function PlayerSelectCard({curPlayer,handleDelete}) {
   
  return (
    <div className='flex justify-between items-center border-b-2 pb-3'>
        <div className='flex items-center gap-2'>
          <img className='w-16 h-16 gap-2 rounded-full object-cover shrink-0' src={curPlayer.image} alt="" />
          <div > 
            <h3 className='font-bold text-xl'>{curPlayer.name}</h3>
            <p className='font-normal text-xs'>{curPlayer.role}</p>
          </div>
        </div>
        <MdDeleteForever className='text-3xl text-red-600' onClick={()=>handleDelete(curPlayer)}/>
      </div>
  )
}
