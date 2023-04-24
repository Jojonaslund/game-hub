import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchResponse<T>{
    count: number;
    results: T[]; //Results, count, id och time är samma som backend.
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) =>{
    const [data, setData] = useState<T[]>([]); //Måste säga att det inte enbart är en tom array utan Gameobject array.
    const [error, setError] = useState("");
    const [isLoading, setIsLoading]= useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((response) =>{ 
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if ( err instanceof CanceledError) return;
  
              setError(err.message);
              setIsLoading(false);
            });
  
        return () => controller.abort();
    }, deps ? [...deps] : []);
  
    return {data, error, isLoading};
  
  
  }

  export default useData;