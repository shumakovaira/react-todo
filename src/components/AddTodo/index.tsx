import { FC, useState } from 'react'

export const AddTodo: FC<{
  handleAddButtonClick: (
    todoTitle: string,
    setTodoTitle: React.Dispatch<React.SetStateAction<string>>,
  ) => void
}> = ({ handleAddButtonClick }) => {
  const [todoTitle, setTodoTitle] = useState<string>('')

  return (
    <div className="add_todo">
      <div
        style={{
          padding: '4px 0px 2px 10px',
          color: 'whitesmoke',
          fontWeight: 'bold',
        }}
      >
        {'Add todo'}
      </div>
      <div className="add_todo__container">
        <input
          type="text"
          className="add_todo__input"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button
          onClick={() => handleAddButtonClick(todoTitle, setTodoTitle)}
          disabled={!todoTitle.length}
          className="add_todo__button"
        >
          {'Add'}
        </button>
      </div>
    </div>
  )
}
