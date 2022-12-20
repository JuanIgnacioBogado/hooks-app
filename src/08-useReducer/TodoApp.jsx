import { useTodo } from '../hooks/useTodo';

import { TodoAdd, TodoList } from './';

export const TodoApp = () => {
  const {
    todos,
    toggleTodoDone,
    deleteTodo,
    addTodo,
    todosPending,
    todosTotal
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp ({todosTotal}) <small>pendientes: {todosPending}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList {...{ todos, toggleTodoDone, deleteTodo }} />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />

          <TodoAdd {...{ addTodo }} />
        </div>
      </div>
    </>
  );
};
