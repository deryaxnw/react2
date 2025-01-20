import React, { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, method) => {
    let response;
    let json;
    try {
      setErr(null);
      setLoading(true);
      response = await fetch(url, method);
      json = await response.json();
    } catch (err) {
      json = null;
      setErr("erro");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, err, loading, request };
};

export default useFetch;
