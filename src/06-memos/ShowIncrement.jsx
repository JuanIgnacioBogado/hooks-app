import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('renderizo componente');
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});
