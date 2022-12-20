import { TodoItem } from './';

export const TodoList = ({ todos, toggleTodoDone, deleteTodo }) => (
  <ul className="list-group">
    {todos?.map(todo => (
      <TodoItem key={todo.id} {...{ ...todo, toggleTodoDone, deleteTodo }} />
    ))}
  </ul>
);
