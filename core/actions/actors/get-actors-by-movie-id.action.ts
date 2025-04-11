import { movieApi } from "@/core/api/movie-api";
import { CastAndCrewResponse } from "@/infrastructure/interfaces/actorsdb.response";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getActorsByMovieId = async (
  id: number | string
): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CastAndCrewResponse>(`/${id}/credits`);

    const result: Cast[] = data.cast.map((cast) =>
      CastMapper.fromMovieDBCastToEntity(cast)
    );

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("cannot load actors");
  }
};
