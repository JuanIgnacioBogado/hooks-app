import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('LoginPage', () => {
  test('should to show component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByTestId('pre');
    expect(preTag.textContent).toBe('null');
  });

  test('should to call setUser when clicked button', () => {
    const setUser = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const btn = screen.getByText(/establecer usuario/i);
    fireEvent.click(btn);

    expect(setUser).toBeCalledWith({
      nombre: 'Juan Ignacio',
      apellido: 'Bogado',
      apodo: 'Nacho',
      edad: 24,
      sexo: 'Masculino'
    });
  });
});
