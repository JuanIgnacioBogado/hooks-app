import { useForm } from '../hooks/useForm';
import { Message } from './message';

export const FormWithCustomHook = () => {
  const { email, username, password, handleInputChange, onResetForm } = useForm(
    {
      username: '',
      email: '',
      password: ''
    }
  );

  return (
    <form>
      <h1>Formulario con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />

      {username === 'strider2' && <Message />}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="juan@hotmail.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        autoComplete="false"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={onResetForm}
      >
        Borrar
      </button>
    </form>
  );
};
