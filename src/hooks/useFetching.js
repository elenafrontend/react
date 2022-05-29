import {useState} from "react";

export const useFetching = (fetchFunc) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setLoading(true);
      await fetchFunc();
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  return [fetching, isLoading, error];
}