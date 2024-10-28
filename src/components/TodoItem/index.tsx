import { FC, useState } from 'react'
import { TodoListInterface, UseTodoReturnInterface } from '../../controller'

interface TodoItemProps {
  todoItem: TodoListInterface
  editTodo: UseTodoReturnInterface['editTodo']
  deleteTodo: UseTodoReturnInterface['deleteTodo']
  changeCompleteStatus: UseTodoReturnInterface['changeCompleteStatus']
}

export const TodoItem: FC<TodoItemProps> = ({
  todoItem,
  editTodo,
  deleteTodo,
  changeCompleteStatus,
}) => {
  const { title, id, isCompleted } = todoItem
  const [editFieldActive, setEditFieldActive] = useState<boolean>(false)
  const [editFieldValue, setEditFieldValue] = useState<string>(title)

  return (
    <div className="todoList__item">
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <div>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => changeCompleteStatus(id, isCompleted)}
          />
        </div>

        <div>
          {!editFieldActive && (
            <div className="todoList__item__title">
              {title}
              <div
                style={{ margin: '0px 8px' }}
                onClick={() => setEditFieldActive(!editFieldActive)}
              >
                <img src="/edit.svg" alt="edit_icon" style={{ width: '1rem' }} />
              </div>
            </div>
          )}
          {editFieldActive && (
            <div
              style={{
                height: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <input
                type="text"
                className="edit_todo__input"
                value={editFieldValue}
                onChange={(e) => setEditFieldValue(e.target.value)}
              />
              <button
                className="edit_todo__save_button"
                onClick={() => {
                  editTodo(id, editFieldValue)
                  setEditFieldActive(!editFieldActive)
                }}
              >
                {'Save'}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="todoList__item__delete" onClick={() => deleteTodo(id)}>
        <img src="/trash.svg" alt="trash_can_icon" style={{ width: '1.4rem' }} />
      </div>
    </div>
  )
}
