import { createContext, useReducer } from 'react'

export const ToDoContext = createContext()

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODO': 
      return {
        toDo: action.payload
      }
    case 'CREATE_TODO':
      return {
        toDo : [action.payload, ...state.toDo]
      }
    case 'DELETE_TODO':
      return {
        toDo: state.toDo.filter((P) => P._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ToDoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toDoReducer, {
    toDo: []
  })

  return (
    <ToDoContext.Provider value={{...state, dispatch}}>
      { children }
    </ToDoContext.Provider>
  )
}