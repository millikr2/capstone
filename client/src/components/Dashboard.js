import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';
import ToDoCard from "./ToDoCard"
import NewToDo from "./NewToDo"

const Dashboard = () =>{
    const {user, completeToDos, incompleteToDos} = useGlobalContext()
    const navigate = useNavigate()

    React.useEffect(() => {
    if(!user && navigate) {
        navigate("/")
    }

    },[user, navigate])

    return (
      <div className='dashboard'>
        <h2 className="name">
          My
          Board</h2>
          <NewToDo />
        {incompleteToDos.length > 0 &&(
        <div className='todos'>
           <h2 className='todos__title'>High Priority</h2>
          {incompleteToDos.map((toDo) => (
            <ToDoCard toDo={toDo} key={toDo._id} />
          ))}
        </div>)}
        {completeToDos.length > 0 && (
          <div className='todos'>
            <h2 className='todos__title'>Low Priority</h2>
            {completeToDos.map((toDo) => (
              <ToDoCard toDo={toDo} key={toDo._id} />
            ))}
          </div>
        )}
      </div>
    );
}

export default Dashboard
