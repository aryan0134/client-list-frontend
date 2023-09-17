import React , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useToDoContext } from '../hooks/useToDoContext'
import { useUserContext } from '../hooks/useUserContext'
import  assigntask  from '../images/assigntask.png'

function ToDoMain() {
    const navigate = useNavigate()
    const [toDoo,setToDoo] = useState([])
    const [userList,setUserList] = useState([])
    const [doing,setDoing] = useState([])
    const [done,setDone] = useState([])
    const [caseStatus,setCaseStatus] = useState("to do")
    const [counter,setCounter] = useState(0)

    const { toDo ,dispatch } = useToDoContext()
    const { user } = useUserContext()

    const handleStatusChange = async (e,arrow) => {
        const newStatus = e.target.value;
        setCaseStatus(newStatus);

        // Assuming you have an API endpoint like "/api/updateClientStatus" on your backend
        try {
        const response = await fetch(`https://client-list-backend-snse.onrender.com/api/todo/${arrow._id}`, {
            method: 'PATCH',
            body: JSON.stringify({caseStatus: newStatus}),
            headers: {
                'Content-Type': 'application/json',
            }      
        })
        const json = await response.json()

        if(!response.ok){
            alert("Something went wrong")
        }

        if(response.ok){
            // alert('Your case status has been updated successfully');
            setCounter(counter => counter+1)
            console.log(json);
        }

        // Handle the response as needed (e.g., show a success message)
        } catch (error) {
        // Handle any errors (e.g., show an error message)
        console.log(error)
        }
    };

    useEffect(() => {
        const fetchWorkouts = async () => {
        const response = await fetch('https://client-list-backend-snse.onrender.com/api/todo')
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'SET_TODO', payload: json})
            console.log(toDo)
        }
        }

        fetchWorkouts()
        
        
    },[dispatch,counter])

    useEffect(() => {
        const filteredusertasks = toDo.filter((task) => task.assignee === user);
        setUserList(filteredusertasks)
        // Filter clients with status 'to do' whenever clients state changes
        const filteredToDoClients = userList.filter((client) => client.caseStatus === 'to do');
        setToDoo(filteredToDoClients);

        const filteredDoingClients = userList.filter((client) => client.caseStatus === 'doing');
        setDoing(filteredDoingClients);

        const filteredDoneClients = userList.filter((client) => client.caseStatus === 'done');
        setDone(filteredDoneClients);

        console.log(userList,"todoclients")
    }, [toDo,counter]);
    return (
        <div className='home-main'>
            <div className='home-welcome'>
                <div className='welcome'><h1>To Do List !</h1></div>
                <div className='add-new-client assigntaskimg' onClick={()=> navigate('/taskform')}>
                    <img src={assigntask} />
                </div>
            </div>
            <div className='clients-table-heading'>
                <div className='head5'><h1>Task Name</h1></div>
                <div className='head1'><h1>Assignee</h1></div>
                <div className='head1'><h1>Assigned By</h1></div>
                <div className='head1'><h1>Due Date</h1></div>
                <div className='head1'><h1>Priority</h1></div>
                <div className='head1 last'><h1>Status</h1></div>
            </div>
            <div className='clients-todo'>
                <div className='clients-todo-heading'><h1>TO DO</h1></div>
                <div className='clients-container'>
                    {toDoo.map((arrow) => (
                    <div className='clients-content-heading' key={arrow._id} >
                        <div className='head5'><h1 className='enjoy' >{arrow.taskName}</h1></div>
                        <div className='head2 head3'><h1>{arrow.assignee}</h1></div>
                        <div className='head2'><h1>{arrow.assignedBy}</h1></div>
                        <div className='head2 head3'><h1>{arrow.dueDate}</h1></div>
                        <div className='head2'><h1>{arrow.priority}</h1></div>
                        <div className='head2 last'>
                        <select
                            id="Status"
                            onChange={(e) => handleStatusChange(e,arrow)}
                            value={arrow.Status}
                            >
                            <option value="to do">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                            </select>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className='clients-todo'>
            <div className='clients-todo-heading'><h1>DOING</h1></div>
            <div className='clients-container'>
                {doing.map((arrow) => (
                <div className='clients-content-heading' key={arrow._id} >
                <div className='head5'><h1 className='enjoy' >{arrow.taskName}</h1></div>
                <div className='head2 head3'><h1>{arrow.assignee}</h1></div>
                <div className='head2'><h1>{arrow.assignedBy}</h1></div>
                <div className='head2 head3'><h1>{arrow.dueDate}</h1></div>
                <div className='head2'><h1>{arrow.priority}</h1></div>
                <div className='head2 last'>
                <select
                    id="Status"
                    onChange={(e) => handleStatusChange(e,arrow)}
                    value={arrow.Status}
                    >
                    <option value="to do">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                    </select>
                </div>
                </div>
                ))}
            </div>
            </div>
            <div className='clients-todo'>
            <div className='clients-todo-heading'><h1>DONE</h1></div>
            <div className='clients-container'>
                {done.map((arrow) => (
                <div className='clients-content-heading' key={arrow._id} >
                <div className='head5'><h1 className='enjoy' >{arrow.taskName}</h1></div>
                <div className='head2 head3'><h1>{arrow.assignee}</h1></div>
                <div className='head2'><h1>{arrow.assignedBy}</h1></div>
                <div className='head2 head3'><h1>{arrow.dueDate}</h1></div>
                <div className='head2'><h1>{arrow.priority}</h1></div>
                <div className='head2 last'>
                <select
                    id="Status"
                    onChange={(e) => handleStatusChange(e,arrow)}
                    value={arrow.Status}
                    >
                    <option value="to do">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                    </select>
                </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default ToDoMain