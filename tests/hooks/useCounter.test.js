import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('useCounter', () => {
  test('should to return default values', () => {
    const {
      result: {
        current: { counter, increment, decrement, reset }
      }
    } = renderHook(() => useCounter());

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should to generate the counter with the value 100', () => {
    const {
      result: {
        current: { counter }
      }
    } = renderHook(() => useCounter(100));

    expect(counter).toBe(100);
  });

  test('should to increment the counter value', () => {
    const {
      result,
      result: {
        current: { increment }
      }
    } = renderHook(() => useCounter());

    act(() => {
      increment();
      increment();
    });

    expect(result.current.counter).toBe(12);
  });

  test('should to decrement the counter value', () => {
    const {
      result,
      result: {
        current: { decrement }
      }
    } = renderHook(() => useCounter());

    act(() => {
      decrement();
      decrement();
    });

    expect(result.current.counter).toBe(8);
  });

  test('should to reset the counter value', () => {
    const {
      result,
      result: {
        current: { decrement, increment, reset }
      }
    } = renderHook(() => useCounter(100));

    act(() => {
      decrement(10);
      increment(2);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
