import React , {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import addclient from '../images/addclient.png'
import { useClientsContext } from "../hooks/useClientsContext"

function Home() {
  const navigate = useNavigate()

  const [toDo,setToDo] = useState([])
  const [doing,setDoing] = useState([])
  const [processing,setProcessing] = useState([])
  const [done,setDone] = useState([])
  const [caseStatus,setCaseStatus] = useState("to do")
  const [counter,setCounter] = useState(0)

  const { clients,dispatch } = useClientsContext()

  const handleStatusChange = async (e,arrow) => {
    const newStatus = e.target.value;
    setCaseStatus(newStatus);

    // Assuming you have an API endpoint like "/api/updateClientStatus" on your backend
    try {
      const response = await fetch(`https://client-list-backend-snse.onrender.com/api/cases/${arrow._id}`, {
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
      const response = await fetch('https://client-list-backend-snse.onrender.com/api/cases')
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'SET_CLIENTS', payload: json})
        console.log(clients)
      }
    }

    fetchWorkouts()
    
    
  },[dispatch,counter])

  useEffect(() => {
    // Filter clients with status 'to do' whenever clients state changes
    const filteredToDoClients = clients.filter((client) => client.caseStatus === 'to do');
    setToDo(filteredToDoClients);

    const filteredDoingClients = clients.filter((client) => client.caseStatus === 'doing');
    setDoing(filteredDoingClients);

    const filteredProcessingClients = clients.filter((client) => client.caseStatus === 'processing');
    setProcessing(filteredProcessingClients);

    const filteredDoneClients = clients.filter((client) => client.caseStatus === 'done');
    setDone(filteredDoneClients);

    console.log(toDo,"todoclients")
  }, [clients,counter]);

  

  return (
    <div className='home-main'>
        <div className='home-welcome'>
            <div className='welcome'><h1>Welcome , Welcome !</h1></div>
            <div className='add-new-client' onClick={()=> navigate('/addclient')}>
                <img src={addclient} />
            </div>
        </div>
        <div className='clients-table-heading'>
            <div className='head1'><h1>First Name</h1></div>
            <div className='head1'><h1>Office</h1></div>
            <div className='head1'><h1>Visa Type</h1></div>
            <div className='head1'><h1>Status</h1></div>
            <div className='head1'><h1>Responsibility</h1></div>
            <div className='head1'><h1>Remarks</h1></div>
            <div className='head1 last'><h1>Case Status</h1></div>
        </div>
        <div className='clients-todo'>
          <div className='clients-todo-heading'><h1>TO DO</h1></div>
          <div className='clients-container'>
            {toDo.map((arrow) => (
              <div className='clients-content-heading' key={arrow._id} >
                <div className='head2'><h1 className='enjoy' onClick={() => {navigate(`/viewprofile/${arrow._id}`);}}>{arrow.firstName}</h1></div>
                <div className='head2 head3'><h1>{arrow.office}</h1></div>
                <div className='head2'><h1>{arrow.visaType}</h1></div>
                <div className='head2 head3'><h1>{arrow.status}</h1></div>
                <div className='head2'><h1>{arrow.responsibility}</h1></div>
                <div className='head2 head3'><h1>{arrow.remarks}</h1></div>
                <div className='head2 last'>
                  <select
                      id="caseStatus"
                      onChange={(e) => handleStatusChange(e,arrow)}
                      value={arrow.caseStatus}
                    >
                      <option value="to do">To Do</option>
                      <option value="doing">Doing</option>
                      <option value="processing">Processing</option>
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
              <div className='clients-content-heading' key={arrow._id}>
                <div className='head2'><h1 className='enjoy' onClick={() => {navigate(`/viewprofile/${arrow._id}`);}}>{arrow.firstName}</h1></div>
                <div className='head2 head3'><h1>{arrow.office}</h1></div>
                <div className='head2'><h1>{arrow.visaType}</h1></div>
                <div className='head2 head3'><h1>{arrow.status}</h1></div>
                <div className='head2'><h1>{arrow.responsibility}</h1></div>
                <div className='head2 head3'><h1>{arrow.remarks}</h1></div>
                <div className='head2 last'>
                  <select
                    id="caseStatus"
                    onChange={(e) => handleStatusChange(e,arrow)}
                    value={arrow.caseStatus}
                  >
                    <option value="to do">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="processing">Processing</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='clients-todo'>
          <div className='clients-todo-heading'><h1>PROCESSING</h1></div>
          <div className='clients-container'>
            {processing.map((arrow) => (
              <div className='clients-content-heading' key={arrow._id}>
                <div className='head2'><h1 className='enjoy' onClick={() => {navigate(`/viewprofile/${arrow._id}`);}}>{arrow.firstName}</h1></div>
                <div className='head2 head3'><h1>{arrow.office}</h1></div>
                <div className='head2'><h1>{arrow.visaType}</h1></div>
                <div className='head2 head3'><h1>{arrow.status}</h1></div>
                <div className='head2'><h1>{arrow.responsibility}</h1></div>
                <div className='head2 head3'><h1>{arrow.remarks}</h1></div>
                <div className='head2 last'>
                  <select
                        id="caseStatus"
                        onChange={(e) => handleStatusChange(e,arrow)}
                        value={arrow.caseStatus}
                      >
                        <option value="to do">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="processing">Processing</option>
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
              <div className='clients-content-heading' key={arrow._id}>
                <div className='head2'><h1 className='enjoy' onClick={() => {navigate(`/viewprofile/${arrow._id}`);}}>{arrow.firstName}</h1></div>
                <div className='head2 head3'><h1>{arrow.office}</h1></div>
                <div className='head2'><h1>{arrow.visaType}</h1></div>
                <div className='head2 head3'><h1>{arrow.status}</h1></div>
                <div className='head2'><h1>{arrow.responsibility}</h1></div>
                <div className='head2 head3'><h1>{arrow.remarks}</h1></div>
                <div className='head2 last'>
                  <select
                        id="caseStatus"
                        onChange={(e) => handleStatusChange(e,arrow)}
                        value={arrow.caseStatus}
                      >
                        <option value="to do">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="processing">Processing</option>
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

export default Home