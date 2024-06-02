import { useCallback, useEffect, useState } from 'react';

/**
 * A React hook that executes http requests (and manages canceling state updates on unmount etc.) for use in components.
 * @param {Function} createFn Your function. Similar to how useEffect, useCallback works.
 * @returns {Array} An array of dependencies that the createFn uses.
 */
export default function useRequest<T = any>(createFn, dependencies = []): [T, boolean, any, boolean] {
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [slowConnection, setSlowConnection] = useState(false);

  const requestFn = useCallback(createFn, [...dependencies]);

  useEffect(() => {
    let isMounted = true;
    const requestPromise = requestFn();
    if (!requestPromise) return;
    setIsLoading(true);

    const timer = setTimeout(function () {
      setSlowConnection(true);
    }, 2000);

    requestPromise
      .then((value) => {
        if (isMounted) {
          setValue(value);
          setIsLoading(false);
          setError(undefined);
          clearTimeout(timer);
          setSlowConnection(false);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
          setValue(undefined);
          setSlowConnection(false);
        }
      });

    return () => (isMounted = false);
  }, [requestFn]);

  return [value, isLoading, error, slowConnection];
}
