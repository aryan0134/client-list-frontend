import React, { useEffect, useState } from 'react'
import workInProgress from '../images/workInProgress.gif'
import { useUserContext } from "../hooks/useUserContext"
import todoimg from '../images/todoimg.gif'
import { useNavigate } from 'react-router-dom'


function ToDoList() {
  const [value, setValue] = useState("")
  const { dispatch } = useUserContext()
  const [counter, setCounter] = useState(0)

  const navigate = useNavigate()

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setValue(newStatus);
    setCounter(counter=>counter+1)
    
    // dispatch({type: 'SET_USER', payload: value})
    // navigate('/todomain')
  }

  useEffect(() => {
    if (value){
      dispatch({type: 'SET_USER', payload: value})
      console.log( value, "user is online")
    }
  }, [counter]);

  return (
    <div className='HomePage'>
      <div className='img-Home' onClick={()=>{navigate('/todomain');}}>
        <img src={todoimg} />
      </div>
        <select
                    id="status"
                    onChange={(e) => handleStatusChange(e)}
                    value={value}
                  >
                    <option value="">Select a User:</option>
                    <option value="Vinod">Vinod</option>
                    <option value="Suman">Suman</option>
                    <option value="Aryan">Aryan</option>
                    <option value="Ayusha">Ayusha</option>
                    <option value="Raman">Raman</option>
                  </select>
    </div>
  )
}

export default ToDoList