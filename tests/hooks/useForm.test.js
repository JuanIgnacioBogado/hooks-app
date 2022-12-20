import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('useForm', () => {
  const initialValue = {
    name: 'porfirio',
    surname: 'kempes',
    age: 24
  };

  test('should to return default value', () => {
    const {
      result: {
        current: { formState, handleInputChange, onResetForm, ...values }
      }
    } = renderHook(() => useForm(initialValue));

    expect(values).toStrictEqual(initialValue);
    expect(formState).toStrictEqual(initialValue);
    expect(handleInputChange).toEqual(expect.any(Function));
    expect(onResetForm).toEqual(expect.any(Function));
  });

  test('should to change the name form', () => {
    const newName = 'Juan';
    const {
      result,
      result: {
        current: { handleInputChange }
      }
    } = renderHook(() => useForm(initialValue));

    act(() => {
      handleInputChange({ target: { name: 'name', value: newName } });
    });

    const { name, formState } = result.current;
    expect(name).toEqual(newName);
    expect(formState.name).toEqual(newName);
  });

  test('should to reset form values', () => {
    const {
      result,
      result: {
        current: { handleInputChange, onResetForm }
      }
    } = renderHook(() => useForm(initialValue));

    act(() => {
      handleInputChange({ target: { name: 'name', value: 'Juan' } });
      onResetForm();
    });

    const { name, formState } = result.current;
    expect(name).toEqual(initialValue.name);
    expect(formState).toStrictEqual(initialValue);
  });
});
