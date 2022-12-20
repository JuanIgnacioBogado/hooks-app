import { useUserContext } from './context/UserContext';

export const HomePage = () => {
  const { user } = useUserContext();

  return (
    <>
      <h1>HomePage</h1> <hr />
      <pre data-testid="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
