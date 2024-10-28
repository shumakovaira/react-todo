import { AddTodo, TodoList, CompletedList } from './components'
import { useTodo } from './controller'

function App() {
  const { todoList, addTodo, editTodo, deleteTodo, changeCompleteStatus } = useTodo()

  const handleAddButtonClick = (
    todoTitle: string,
    setTodoTitle: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    if (!todoTitle.length) {
      return
    }

    addTodo(todoTitle)
    setTodoTitle('')
  }

  return (
    <div className="main">
      <AddTodo handleAddButtonClick={handleAddButtonClick} />
      <div style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <TodoList
          todoList={todoList}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          changeCompleteStatus={changeCompleteStatus}
        />
        <CompletedList
          todoList={todoList}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          changeCompleteStatus={changeCompleteStatus}
        />
      </div>
    </div>
  )
}

export default App
