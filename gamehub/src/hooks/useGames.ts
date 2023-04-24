import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {CanceledError} from 'axios'
import useData from "./useData";
import { Genres } from "./useGenre";
import { GameQuery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface GameObjects {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
    
  }
  
/*   interface FetchGamesResponse {
    count: number;
    results: GameObjects[];
  } */

const useGames = (gameQuery: GameQuery  ) => 
useData<GameObjects>("/games", {
  params: { // Parameter object som skickas till servern
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
  }}, [ // Array med dependencies.
    gameQuery
   ]);

      //Store game objects.
  //const [games, setGames] = useState<GameObjects[]>([]); //Måste säga att det inte enbart är en tom array utan Gameobject array.
 /* const [error, setError] = useState("");
  const [isLoading, setIsLoading]= useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((response) =>{ 
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if ( err instanceof CanceledError) return;

            setError(err.message);
            setIsLoading(false);
          });

      return () => controller.abort();
  }, []);

  return {games, error, isLoading};*/




export default useGames;