import React from 'react'
import Tags from './Tags'
import { FaRegTrashAlt } from "react-icons/fa";

const Task = ({taskTitle,taskTags,HandleDelete,index,setActiveCard}) => {
  return (
    <div className='shadow-sm w-[380px] h-28 border rounded-md p-3  cursor-grab active:opacity-70  active:border-slate-600' draggable onDragStart={()=>setActiveCard(index)} onDragEnd={()=>setActiveCard(null)}>
        <p>{taskTitle}</p>
        <div className='py-6 flex justify-between'>
            <div className='flex '>
              {
                taskTags.map((item,index) => <Tags key={index} tagName={item} selected />)
              }
            </div>
           
            <button onClick={()=>HandleDelete(index)}><FaRegTrashAlt /></button>
        </div>
      
    </div>
  )
}

export default Task