import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import cardService, { type List, type Results } from "../services/card-service";

const useCards = () => {
  const [result, setResult] = useState<Results[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [order, setOrder] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = cardService.getAll<List>({});
    request
      .then((res) => {
        setResult(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { result, loading, error, setResult, setOrder, setError };
};

export default useCards;
