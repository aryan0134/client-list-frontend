import { ToDoContext } from '../context/ToDoContext'
import { useContext } from 'react'

export const useToDoContext = () => {
  const context = useContext(ToDoContext)

  if (!context) {
    throw Error('useToDoContext must be used inside an ToDoContextProvider')
  }

  return context
}