import { useEffect, useState } from 'react'

export interface UseTodoReturnInterface {
  addTodo: (todo: string) => void
  editTodo: (todoId: number, newValue: string) => void
  deleteTodo: (todoId: number) => void
  changeCompleteStatus: (todoId: number, completeStatus: boolean) => void
  todoList: TodoListInterface[]
}

export interface TodoListInterface {
  title: string
  id: number
  isCompleted: boolean
}

export const useTodo = (): UseTodoReturnInterface => {
  const [todoList, setTodolist] = useState<TodoListInterface[]>([])

  useEffect(() => {
    getTodoList()
  }, [])

  const addTodo = (todo: string) => {
    let todoList: TodoListInterface[] = []
    const localStorageData = localStorage.getItem('todoList')

    if (!localStorageData) {
      todoList.push({ title: todo, id: generateToDoId(), isCompleted: false })

      localStorage.setItem('todoList', JSON.stringify(todoList))
    } else {
      todoList = JSON.parse(localStorageData)
      todoList.push({ title: todo, id: generateToDoId(), isCompleted: false })

      localStorage.setItem('todoList', JSON.stringify(todoList))
    }

    getTodoList()
  }

  const generateToDoId = () => {
    const timestamp = Date.now()
    const randomNumbers = Math.floor(Math.random() * 90 + 10)
    const id = Number(`${timestamp}${randomNumbers}`)
    return id
  }

  const editTodo = (todoId: number, newValue: string) => {
    const localStorageData = localStorage.getItem('todoList')

    if (!localStorageData) {
      return
    } else {
      const parsedData: TodoListInterface[] = JSON.parse(localStorageData)
      const elementIndex = parsedData.findIndex((element) => element.id === todoId)

      if (elementIndex !== -1) {
        parsedData[elementIndex].title = newValue

        localStorage.setItem('todoList', JSON.stringify(parsedData))
        getTodoList()
      } else {
        throw new Error('Cant find index in local storage array')
      }
    }
  }

  const deleteTodo = (todoId: number) => {
    const localStorageData = localStorage.getItem('todoList')

    if (!localStorageData) {
      return
    } else {
      const parsedData: TodoListInterface[] = JSON.parse(localStorageData)
      const elementIndex = parsedData.findIndex((element) => element.id === todoId)

      if (elementIndex !== -1) {
        parsedData.splice(elementIndex, 1)

        localStorage.setItem('todoList', JSON.stringify(parsedData))
        getTodoList()
      } else {
        throw new Error('Cant find index in local storage array')
      }
    }
  }

  const changeCompleteStatus = (todoId: number, completeStatus: boolean) => {
    const localStorageData = localStorage.getItem('todoList')

    if (!localStorageData) {
      return
    } else {
      const parsedData: TodoListInterface[] = JSON.parse(localStorageData)
      const elementIndex = parsedData.findIndex((element) => element.id === todoId)

      if (elementIndex !== -1) {
        parsedData[elementIndex].isCompleted = !completeStatus

        localStorage.setItem('todoList', JSON.stringify(parsedData))
        getTodoList()
      } else {
        throw new Error('Cant find index in local storage array')
      }
    }
  }

  const getTodoList = () => {
    const todoList = localStorage.getItem('todoList')

    if (!todoList) {
      setTodolist([])
    } else {
      setTodolist(JSON.parse(todoList).reverse() || [])
    }
  }

  return {
    addTodo,
    editTodo,
    deleteTodo,
    changeCompleteStatus,
    todoList,
  }
}
