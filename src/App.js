import React, { useState, useEffect } from 'react'
import Header from './pages/Header'
import Body from './pages/Body'

const App = () => {
  const oldTasks = localStorage.getItem('tasks');

  const [Tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  

  // Delete Task card
  const HandleDelete = (taskIndex) => {
    const filteredTasks = Tasks.filter((task,index) => index !== taskIndex);
    setTasks(filteredTasks);
  }

  //local storage of the task
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(Tasks))
  },[Tasks])
  return (
    <>
      <Header setTasks={setTasks}/>
      <Body tasks={Tasks} HandleDelete={HandleDelete} setTasks={setTasks}/>
      
 
    </>
  )
}

export default App