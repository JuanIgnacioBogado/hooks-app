import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('MainApp', () => {
  test('should to show HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/homepage/i)).toBeTruthy();
  });

  test('should to show LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/loginpage/i)).toBeTruthy();
  });
});
