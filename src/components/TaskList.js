import React from 'react'
import Task from './Task'
import DropArea from './DropArea'


const TaskList = ({title, status, tasks,HandleDelete,setActiveCard,onDrop,icon}) => {
  return (
    <div className='my-6 ' >
        <h1 className='flex font-bold text-lg'>
          <img src={icon} alt='' className='max-w-[25px] mr-1'></img>
          {title}
          </h1>
        <DropArea onDrop={()=>onDrop(status,0)} />
        {
          tasks.map((item , index) => item.status === status && (
            <React.Fragment key={index}>
              <Task  taskTitle={item.task} taskTags={item.tags} HandleDelete={HandleDelete} index={index} setActiveCard={setActiveCard}/> 
              <DropArea onDrop={()=>onDrop(status,index+1)} />
            </React.Fragment>
          ))
        }
    </div>
  )
}

export default TaskList