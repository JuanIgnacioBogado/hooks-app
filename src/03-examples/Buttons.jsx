export const Buttons = ({
  increment,
  decrement,
  reset,
  counter,
  isLoading
}) => (
  <div className="mb-4">
    <button
      className="btn btn-primary"
      onClick={() => increment()}
      disabled={isLoading}
    >
      +1
    </button>
    <button
      className="btn btn-primary"
      onClick={reset}
      disabled={counter === 1}
    >
      Reset
    </button>
    <button
      className="btn btn-primary"
      onClick={() => decrement()}
      disabled={counter === 1}
    >
      -1
    </button>
  </div>
);
