import { useCounter, useFetch } from "../hooks";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button className="btn btn-primary" disabled={isLoading} onClick={() => increment(1)}>
        Next quote
      </button>
    </>
  );
};

export default MultipleCustomHooks;
