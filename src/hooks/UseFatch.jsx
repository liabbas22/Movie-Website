import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/Api";

const UseFatch = (url) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Some Thing Went Wrong");
      });
  }, [url]);
  return { data, loading, error };
};

export default UseFatch;
