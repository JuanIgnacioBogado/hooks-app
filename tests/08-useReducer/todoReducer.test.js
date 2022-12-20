import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('useReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'demo todo',
      done: false
    }
  ];

  test('should to return initialState', () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test('should to add a todo', () => {
    const action = {
      type: '[TODO] add todo',
      todo: {
        id: 2,
        description: 'new todo 2',
        done: false
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(2);
    expect(newState).toContain(action.todo);
  });

  test('should to delete a todo', () => {
    const action = {
      type: '[TODO] delete todo',
      id: 1
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(0);
    expect(newState).not.toContain(initialState.todo);
  });

  test('should to toggle done todo', () => {
    const action = {
      type: '[TODO] toggle done',
      id: 1
    };
    const [todo] = todoReducer(initialState, action);
    expect(todo.done).toBeTruthy();
  });
});
