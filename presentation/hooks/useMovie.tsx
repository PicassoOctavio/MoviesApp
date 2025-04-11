import { getActorsByMovieId } from "@/core/actions/actors/get-actors-by-movie-id.action";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const actorsQuery = useQuery({
    queryKey: ["movie", "actors", id],
    queryFn: () => getActorsByMovieId(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { movieQuery, actorsQuery };
};
