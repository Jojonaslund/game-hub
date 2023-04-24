
import genres from "../data/genres";

export interface Genres{
    id: number;
    name: string; //Results, count, id och time är samma som backend.
    image_background: string;
}

const useGenre = () => ({ data: genres, isLoading: false, error: null})

  
  
  

  export default useGenre;