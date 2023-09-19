import React, { useState , useEffect} from 'react'
import { useUserContext } from '../hooks/useUserContext'
import { useToDoContext } from '../hooks/useToDoContext'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function TaskForm() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const { toDo ,dispatch } = useToDoContext()
  const [userList,setUserList] = useState([])
  const [taskName, setTaskName] = useState("")
  const [assignee, setAssignee] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState("")
  const [status, setStatus] = useState("")
  const [edit, setEdit] = useState(0)
  const [editTaskName, setEditTaskName] = useState("")
  const [editAssignee, setEditAssignee] = useState("")
  const [editDueDate, setEditDueDate] = useState("")
  const [editPriority, setEditPriority] = useState("")
  const [editStatus, setEditStatus] = useState("")
  const [editCounter , setEditCounter] = useState(null)
  const [id, setId] = useState("")

  useEffect(() => {
    const fetchClients = async () => {
    const response = await fetch(`https://client-list-backend-snse.onrender.com/api/todo/${id}`
    )

    const json = await response.json()

    if(response.ok){
        setEditTaskName(json.taskName)
        setEditAssignee(json.assignee)
        setEditDueDate(json.dueDate)
        setEditPriority(json.priority)
        setEditStatus(json.status)
    }
    }
    
    fetchClients()

    
},[editCounter])

const handleEdit = async (e) => {
    e.preventDefault()

    const clients = {taskName: editTaskName , assignee: editAssignee , dueDate: editDueDate , priority: editPriority , status: editStatus}

    const response = await fetch(`https://client-list-backend-snse.onrender.com/api/todo/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(clients),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const json = await response.json()

    if(!response.ok){
        alert('Something went wrong')
    }
    if(response.ok){
      setEditTaskName("")
      setEditAssignee("")
      setEditDueDate("")
      setEditPriority("")
      setEditStatus("")
      console.log('To DO Edited ',json)
      navigate('/todo')
    }
}

  useEffect(() => {
    const filteredusertasks = toDo.filter((task) => task.assignedBy === user);
    setUserList(filteredusertasks)


    console.log(toDo,"todoclients")
}, [toDo]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const assignedBy= user

    const clients = {taskName,assignee,assignedBy,dueDate,priority,status}

    const response = await fetch('https://client-list-backend-snse.onrender.com/api/todo', {
        method: 'POST',
        body: JSON.stringify(clients),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const json = await response.json()

    if(!response.ok){
        alert('Something went wrong')
    }
    if(response.ok){
        setTaskName("")
        setDueDate("")
        setAssignee("")
        setPriority("")
        setStatus("")
        console.log('New Task Added ',json)
        dispatch({type: 'CREATE_TODO', payload: json})
        
    }
}

const handleClick = async (arrow) => {


  const response = await fetch(`https://client-list-backend-snse.onrender.com/api/todo/${arrow._id}`, {
  method: 'DELETE'
  })
  const json = await response.json()

  if(response.ok){
  dispatch({type: 'DELETE_TODO', payload: json})
  }

}
const deletePractice = (arrow) => {
  const confirmBox = window.confirm(
    "Do you really want to delete "
  )
  if (confirmBox === true) {
    handleClick(arrow)
  }
}

  return (
    <div className='my-task-main'>
      <div className='my-task-details-main'>
        {userList.map((arrow) => (
          <div className='task-details-container'>
            <div className='task1'>
              <div className='task1-name'><p>{arrow.taskName}</p></div>
              <div className='task1-edit'><div style={{cursor : "pointer"}} onClick={()=> {setId(arrow._id); setEditCounter(editCounter=>editCounter+1); setEdit(1);}}><BiEdit /></div> <div style={{color: "red", cursor : "pointer"}} onClick={()=>{deletePractice(arrow);}}><AiFillDelete /></div></div>
            </div>
            <div className='task2'>
              <div className='task2-division'><h2>{arrow.assignee}</h2></div>
              <div className='task2-division'><h2>{arrow.dueDate}</h2></div>
              <div className='task2-division'><h2>{arrow.priority}</h2></div>
              <div className='task2-division'><h2>{arrow.status}</h2></div>
            </div>
          </div>
        ))}
      </div>
      <div className='my-task-form'>
        <form onSubmit={handleSubmit}>
          <div className='baba'>
            <h2>Assign A Task</h2>
          </div>
          <div className='taskname'>
            <label>Task Name</label>
            <textarea
              type="text"
              onChange={(e) => setTaskName(e.target.value)}
              value={taskName}
            />
          </div>
          <div className='duedate'>
            <label>Due Date</label>
            <input 
              type='date'
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
          </div>
          <div className='form-dropdowns'>
            <label>Assignee</label>
            <select 
              id='assignee'
              onChange={(e) => setAssignee(e.target.value)}
              value={assignee}
            >
              <option value="">Select a User:</option>
              <option value="Vinod">Vinod</option>
              <option value="Suman">Suman</option>
              <option value="Aryan">Aryan</option>
              <option value="Ayusha">Ayusha</option>
              <option value="Raman">Raman</option>
            </select>
          </div>
          <div className='form-dropdowns'>
            <label>Priority</label>
            <select 
              id='priority'
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
            >
              <option value="">Select a Priority:</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className='form-dropdowns'>
            <label>Status</label>
            <select 
              id='status'
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="">Select a Status:</option>
              <option value="to do">to do</option>
              <option value="doing">doing</option>
              <option value="done">done</option>
            </select>
          </div>
          <div className='form-buttons'>
            <button>Assign</button>
          </div>
        </form>
      </div>
      {edit == 1 ? 
        <div className='edit-main'>
          <form onSubmit={handleEdit}>
              <div className='baba'>
                <h2>Edit A Task</h2>
              </div>
              <div className='taskname'>
                <label>Task Name</label>
                <textarea
                  type="text"
                  onChange={(e) => setEditTaskName(e.target.value)}
                  value={editTaskName}
                />
              </div>
              <div className='duedate'>
                <label>Due Date</label>
                <input 
                  type='date'
                  onChange={(e) => setEditDueDate(e.target.value)}
                  value={editDueDate}
                />
              </div>
              <div className='form-dropdowns'>
                <label>Assignee</label>
                <select 
                  id='assignee'
                  onChange={(e) => setEditAssignee(e.target.value)}
                  value={editAssignee}
                >
                  <option value="">Select a User:</option>
                  <option value="Vinod">Vinod</option>
                  <option value="Suman">Suman</option>
                  <option value="Aryan">Aryan</option>
                  <option value="Ayusha">Ayusha</option>
                  <option value="Raman">Raman</option>
                </select>
              </div>
              <div className='form-dropdowns'>
                <label>Priority</label>
                <select 
                  id='priority'
                  onChange={(e) => setEditPriority(e.target.value)}
                  value={editPriority}
                >
                  <option value="">Select a Priority:</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className='form-dropdowns'>
                <label>Status</label>
                <select 
                  id='status'
                  onChange={(e) => setEditStatus(e.target.value)}
                  value={editStatus}
                >
                  <option value="">Select a Status:</option>
                  <option value="to do">to do</option>
                  <option value="doing">doing</option>
                  <option value="done">done</option>
                </select>
              </div>
              <div className='form-buttons'>
                <button>Edit</button>
              </div>
          </form>
        </div> : ""}
    </div>
  )
}

export default TaskForm