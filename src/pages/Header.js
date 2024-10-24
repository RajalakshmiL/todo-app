import React, { useState } from 'react'
import Tags from '../components/Tags'

const Header = ({setTasks}) => {
  // fields  in useState
  const [taskData,setTaskData] = useState({
    task : '',
    status : 'todo',
    tags: []
  });
 
  // get field values 
  const HandleChange = (e) => {
    const {name, value} = e.target;
    setTaskData((prev) => {
        return {...prev, [name]: value}
      }
    )
  }
  // Tag
  const CheckTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  }
  const HandleTag = (tag) => {
    if(taskData.tags.some(item => item === tag)){
    const filteredTags = taskData.tags.filter((item) => item !== tag);
    setTaskData((prev) => {
      return {...prev, tags:filteredTags}
    })
    }else{
      setTaskData((prev) => {
        return {...prev, tags: [...prev.tags,tag]}
      })
    }
  }
  // Submitting the task
  const HandleSubmit = (e) => {
    e.preventDefault();
    setTasks(prev => {
      return [...prev, taskData];
    }) 
    localStorage.setItem('tasks',JSON.stringify(taskData))
    setTaskData({
      task : '',
      status : 'todo',
      tags: []
    })
  }
  return (
    
    <div className='shadow-md h-36 py-5'>
      <form onSubmit={HandleSubmit}>
          <div className='flex justify-center align-middle pb-5'>
              <input className='p-2 bg-gray-100 border w-1/3 ' value={taskData.task} name='task' type='text' placeholder='Enter your task' onChange={HandleChange}></input>
          </div>
          <div className='flex justify-center text-sm'>

              <Tags tagName={'HTML'} HandleTag={HandleTag} selected={CheckTag("HTML")}/>
              <Tags tagName={'CSS'} HandleTag={HandleTag} selected={CheckTag("CSS")} />
              <Tags tagName={'JavaScript'} HandleTag={HandleTag} selected={CheckTag("JavaScript")} />
              <Tags tagName={'React'} HandleTag={HandleTag} selected={CheckTag("React")} />
              <Tags tagName={'Nodejs'} HandleTag={HandleTag} selected={CheckTag("Nodejs")} />
                  
              <div className='ml-5'>
                  <select className='w-20 p-1 border-2  rounded-md mx-2' value={taskData.status} name='status' onChange={HandleChange} >
                      <option value='todo'>To-do</option>
                      <option value='doing'>Doing</option>
                      <option value='done'> Done</option>
                  </select>
                  <button type='submit' className='w-25 p-1 border bg-blue-500 text-white rounded-md' >+ Add Task</button>
            </div>
            
          </div>
      </form>

    </div>
    
  )
}

export default Header