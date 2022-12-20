const initialState = [
  {
    id: 1,
    todo: 'hacer tarea',
    done: false
  }
];

const todoReducer = (state = initialState, {type, ...props} = {}) => {
  switch (type) {
    case '[TODO] add todo':
      return [...state, props.todo];
    default:
      return state;
  }
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'hacer cama',
  done: false
};

const addTodoAction = {
  type: '[TODO] add todo',
  todo: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log('todos', todos);
