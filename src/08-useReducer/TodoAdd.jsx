import { memo } from 'react';

export const TodoAdd = memo(({ addTodo }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = e.target.todo.value;
    if (!inputValue.trim()) return;

    const newTodo = {
      id: new Date().getTime(),
      description: inputValue.trim(),
      done: false
    };

    addTodo(newTodo);
    e.target.reset();
    e.target.todo.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        className="form-control"
        type="text"
        name="todo"
        placeholder="Qué hay que hacer?"
      />
      <button className="btn btn-outline-primary mt-2">Add</button>
    </form>
  );
});
