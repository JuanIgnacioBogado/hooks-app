import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('TodoItem', () => {
  const todo = {
    id: 1,
    description: 'hacer la cama',
    done: false
  };
  const toggleTodoDone = jest.fn();
  const deleteTodo = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should to show a todo pending to complete', () => {
    render(<TodoItem {...{ ...todo, toggleTodoDone, deleteTodo }} />);

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item list-group-item-action d-flex justify-content-between'
    );

    const spanElement = screen.getByTestId('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should to show a todo completed', () => {
    render(
      <TodoItem {...{ ...todo, done: true, toggleTodoDone, deleteTodo }} />
    );

    const spanElement = screen.getByTestId('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should to show call toggleTodoDone when button clicked', () => {
    render(<TodoItem {...{ ...todo, toggleTodoDone, deleteTodo }} />);

    // screen.debug();
    const buttonDone = screen.getByText(/done/i);
    fireEvent.click(buttonDone);

    expect(toggleTodoDone).toBeCalledWith(todo.id);
    // expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should to show call deleteTodo when button clicked', () => {
    render(<TodoItem {...{ ...todo, toggleTodoDone, deleteTodo }} />);

    const buttonDone = screen.getByText(/delete/i);
    fireEvent.click(buttonDone);

    expect(deleteTodo).toBeCalledWith(todo.id);
  });
});
