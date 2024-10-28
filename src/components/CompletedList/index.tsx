import { FC } from 'react'
import { TodoItem } from '../'
import { TodoListInterface, UseTodoReturnInterface } from '../../controller'

type CompletedListProps = Omit<UseTodoReturnInterface, 'addTodo'>

export const CompletedList: FC<CompletedListProps> = ({
  todoList,
  editTodo,
  deleteTodo,
  changeCompleteStatus,
}) => {
  const completeArray = todoList.filter((item) => item.isCompleted === true)

  if (!completeArray.length) {
    return
  }

  return (
    <div>
      <div style={{ fontSize: '24px', color: 'whitesmoke', fontWeight: 'bold' }}>
        {'Completed:'}
      </div>
      {completeArray.map((item: TodoListInterface, i: number) => (
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
