import { useUserContext } from './context/UserContext';

export const LoginPage = () => {
  const { setUser, user } = useUserContext();

  return (
    <>
      <h1>LoginPage</h1> <hr />
      <pre data-testid="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            nombre: 'Juan Ignacio',
            apellido: 'Bogado',
            apodo: 'Nacho',
            edad: 24,
            sexo: 'Masculino'
          })
        }
      >
        Establecer Usuario
      </button>
    </>
  );
};
