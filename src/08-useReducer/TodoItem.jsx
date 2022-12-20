import { memo } from 'react';

export const TodoItem = memo(({ id, done, description, toggleTodoDone, deleteTodo }) => (
  <li className="list-group-item list-group-item-action d-flex justify-content-between">
    <span
      data-testid="span"
      className={`${done ? 'text-decoration-line-through' : ''} align-self-center`}
    >
      {description}
    </span>
    <div className="d-flex">
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={() => toggleTodoDone(id)}
      >
        {done ? 'Undone' : 'Done'}
      </button>
      <button
        className="btn btn-sm btn-outline-danger m-0"
        onClick={() => deleteTodo(id)}
      >
        delete Task
      </button>
    </div>
  </li>
));
