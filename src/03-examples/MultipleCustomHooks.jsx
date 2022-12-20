import { useFetch, useCounter } from '../hooks';

import { LoadingQuote, Quote, Buttons } from './';

export const MultipleCustomHooks = () => {
  const { counter, ...rest } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <Buttons {...{ ...rest, isLoading, counter }} />

      {
        isLoading
          ? <LoadingQuote />
          : data?.map(q => <Quote {...{ key: q.quote, ...q }} />)
      }
    </>
  );
};
