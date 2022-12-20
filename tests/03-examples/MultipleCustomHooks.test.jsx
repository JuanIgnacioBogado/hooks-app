import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should to show component for default', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText(/loading/i));
    expect(screen.getByText(/breaking bad quotes/i));

    const nextButton = screen.getByRole('button', { name: '+1' });
    expect(nextButton.disabled).toBeTruthy();
  });

  test('should to show a Quote', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: 'hola mundo',
          author: 'Porfirio'
        }
      ],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText(/hola mundo/i)).toBeTruthy();
    expect(screen.getByText(/porfirio/i)).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: '+1' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('should to call increment function', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote: 'hola mundo',
          author: 'Porfirio'
        }
      ],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: '+1' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toBeCalled();
  });
});
