import React from 'react'
import workInProgress from '../images/workInProgress.gif'


function ToDoList() {
  return (
    <div className='HomePage'>
        <div className='WorkInProgress'>
            <img src={workInProgress} />
                <div className='title'>
                <h1>Hey! <br></br> <br></br>This Page is under Construction... </h1>
                </div>
        </div>
    </div>
  )
}

export default ToDoList