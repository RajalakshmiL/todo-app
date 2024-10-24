import React, {useState} from 'react'
import TaskList from '../components/TaskList'
import todoIcon from '../assests/direct-hit.png';
import doingIcon from '../assests/glowing-star.png';
import doneIcon from '../assests/check-mark.png';

const Body = ({tasks,HandleDelete,setTasks}) => {

  const [activeCard, setActiveCard] = useState(null);

  const onDrop = (status, position) => {
    //  console.log(`${activeCard} is goiny to place ${status} and post ${position}`);
     if(activeCard == null || activeCard === undefined) return;
      const TasktoMove = tasks[activeCard];
      const updatedTask = tasks.filter((task, index) => index !== activeCard)
      // will insert item into array at the specified index (Deleting 0 items)
      updatedTask.splice(position, 0, {
        ...TasktoMove,
        status:status
     })
     setTasks(updatedTask);
  }
  return (
    <div className='flex justify-evenly align-middle mx-32 '>
          
        <TaskList title='To-do' status='todo' tasks={tasks} HandleDelete={HandleDelete} setActiveCard={setActiveCard} onDrop={onDrop} icon={todoIcon}/>
        <TaskList title='Doing' status='doing' tasks={tasks} HandleDelete={HandleDelete} setActiveCard={setActiveCard} onDrop={onDrop} icon={doingIcon}/>
        <TaskList title='Done' status='done' tasks={tasks} HandleDelete={HandleDelete} setActiveCard={setActiveCard} onDrop={onDrop} icon={doneIcon}/>
    </div>
  )
}

export default Body