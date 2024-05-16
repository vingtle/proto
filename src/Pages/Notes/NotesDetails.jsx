
import { useEffect, useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import TodoPageInput from '../../components/TodoPageInput/TodoPageInput';
import "./notesDetails.css"

const NotesDetails = () => {
  const navigate = useNavigate();
  const { id, type } = useParams();
  const [Todolist, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("");
  useEffect(()=>{
    const storedTodoList =localStorage.getItem(id);
    if(storedTodoList){
     setTodoList(JSON.parse(storedTodoList));
    }
  },[id])
  const handleInput = (ev) => {
    setNewTask(ev.target.value);
  };
  const deleteTask = (del) => {
    const filterVar = Todolist.filter((task) => task.id !== del)
    setTodoList(filterVar);
    localStorage.setItem(id, JSON.stringify(filterVar))
  };
  const addTask = () => {
    if(newTask===""){
      return alert("Write your task")
    }else{ 
    const theDate = new Date();
    const localDate = theDate.toLocaleDateString();
    const theTime = new Date();
    const localTime = theTime.toLocaleTimeString();
    const theTask = {
      id: Todolist.length === 0 ? 1 : Todolist[Todolist.length - 1].id + 1,
      todo: newTask,
      date: localDate,
      time: localTime,
      complete:false
    };
    
    const newTodo=[...Todolist, theTask];
    setTodoList(newTodo);
    localStorage.setItem(id, JSON.stringify(newTodo));
    setNewTask("");
   }
  };
  return (
    <div id='notesDetails'>
      <BsArrowLeft  className='return-btn' onClick={() => navigate("/home/notes")} />
      <h2 className='categoryName'>Todopage {id} {type}</h2>
      <TodoPageInput addTask={addTask} handleInput={handleInput} newTask={newTask} />
      <div className='list-container'>
        {Todolist.map((task) => (
          <div className='task-box' key={task.id}>
            <p>{task.todo}</p>
            <MdDeleteOutline className='btn-del'
            onClick={() => deleteTask(task.id)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesDetails