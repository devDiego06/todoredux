
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice';
import {Link} from 'react-router-dom'

export const TaskList = () => {

    const stateSelector = useSelector(state => state.task)
    const dispacth = useDispatch();
    const taskk = useSelector(state => state.task)
    
  const handleDelete = (id) => {
    dispacth(deleteTask(id))
  }



  return (
    <div className="">
      <header>
        <h1>There are {taskk.length} task</h1>
        <Link to={"/create-task"}>Create new task</Link>
      </header>
      {stateSelector.map(taskk => (
        <div key={taskk.id}>
          <p>{taskk.title}</p>
          <img src="./src/assets/close.svg"
           alt="close.svg" 
           className='w-6 mx-2 h-7 cursor-pointer' 
           onClick={() => handleDelete(taskk.id)}
           />
           <Link to={`/edit-task/${taskk.id}`}>Edit</Link>
        </div>
      ))}
      
    </div>
  ) 
}
