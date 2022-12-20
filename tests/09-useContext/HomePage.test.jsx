import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('HomePage', () => {
  const user = {
    id: 1,
    name: 'Porfirio'
  };

  test('should to show the component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByTestId('pre');
    expect(preTag.textContent).toBe('null');
  });

  test('should to show the component with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByTestId('pre');

    expect(preTag.textContent).not.toBe('null')
    expect(preTag.textContent).toContain(user.name)
    expect(preTag.textContent).toContain(`${user.id}`)
    expect(JSON.parse(preTag.textContent)).toStrictEqual(user);
  });
});
