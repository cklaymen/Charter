import { useEffect, useState } from "react";

const cache = {};

const useQuery = (key, loadData) => {
  const [data, setData] = useState(cache[key]);
  const [loading, setLoading] = useState(!cache[key]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function queryData() {
      try {
        setLoading(true);
        setError(false);
        const loadedData = await loadData();
        setData(loadedData);
        cache[key] = loadedData;
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (!cache[key]) {
      queryData();
    }
  }, [key, loadData]);

  return { data, loading, error };
};

export default useQuery;
