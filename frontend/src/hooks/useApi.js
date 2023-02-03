
import { useState } from "react";

const useApi = (apiFunc, callback) => {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (body) => {
    setLoading(true);
    try {
      const result = await apiFunc(body);
      setData(result.data);
      setStatus(result.status);
      callback(result)
      console.log('result.staus ', result.status)
    } catch (err) {
      setStatus(err.status);
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    status,
    data,
    error,
    loading,
    request
  };
};

export default useApi