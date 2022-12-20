import { useState, useEffect } from 'react';
import { Message } from './message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'juan@correo.com'
  });

  const { email, username } = formState;

  const handleInputChange = ({ target: { value, name } }) =>
    setFormState({ ...formState, [name]: value });

  useEffect(() => {
    // console.log('calamardo');
  }, []);

  useEffect(() => {
    // console.log('form state changed');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
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
    </>
  );
};
