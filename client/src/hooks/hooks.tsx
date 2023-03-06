import { useEffect, useState } from "react";

const useAPIResponse = (isPersist: boolean) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<APIReponse>();

  const sendRequest = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000");
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isPersist) {
      const interval = setInterval(() => {
        sendRequest();
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isPersist]);

  return { data, isError, isLoading, sendRequest };
};

export default useAPIResponse;
