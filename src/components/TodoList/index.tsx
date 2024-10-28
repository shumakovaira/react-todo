import { FC } from 'react'
import { TodoItem } from '../'
import { TodoListInterface, UseTodoReturnInterface } from '../../controller'

type TodoListProps = Omit<UseTodoReturnInterface, 'addTodo'>

export const TodoList: FC<TodoListProps> = ({
  todoList,
  editTodo,
  deleteTodo,
  changeCompleteStatus,
}) => {
  const notCompleteArray = todoList.filter((item) => item.isCompleted === false)

  if (!notCompleteArray.length) {
    return
  }

  return (
    <div>
      <div style={{ fontSize: '24px', color: 'whitesmoke', fontWeight: 'bold' }}>{'TODOS:'}</div>
      {notCompleteArray.map((item: TodoListInterface, i: number) => (
        <div key={`${item}-${i}`}>
          <TodoItem
            todoItem={item}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            changeCompleteStatus={changeCompleteStatus}
          />
        </div>
      ))}
    </div>
  )
}
