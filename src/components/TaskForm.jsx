import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTask, editTask } from '../features/tasks/taskSlice';
import {v4 as uid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'


export const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
  })

  const dispacth = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const taskSelector = useSelector((state) => state.task)


  const handleChange = (e) => {
    setTask({
      ...task, 
      [e.target.name]: e.target.value,
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(params.id){
      dispacth(editTask({...task, id: params.id}))
    }else{
       dispacth(addTask({
      ...task, 
      id: uid(),
    }));
    }
   
    navigate("/");
  } 

  useEffect(() => {
    if(params.id){
      setTask(taskSelector.find((task) => task.id === params.id )); 
    }
  }, [params, task])
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder='Write something'  onChange={handleChange}/> 
      <button  type="submit">Send</button>
    </form>
  )
}
