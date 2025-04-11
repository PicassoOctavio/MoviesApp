import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import ActorsHorizontalList from "@/presentation/components/actors/ActorsHorizontalList";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, actorsQuery } = useMovie(+id);

  if (movieQuery.isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Cargando</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  /* useEffect(() => {
    if (actorsQuery.data) console.log({ actorsQuery: actorsQuery.data });
  }, [actorsQuery]); */

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data?.originalTitle || ""}
        poster={movieQuery.data?.poster || ""}
        title={movieQuery.data?.title || ""}
      />

      {movieQuery.data && <MovieDescription movie={movieQuery.data} />}

      {actorsQuery.isLoading && (
        <View className="flex flex-1 justify-center items-center">
          <Text className="mb-4">Cargando actores...</Text>
          <ActivityIndicator color="purple" size={30} />
        </View>
      )}

      {actorsQuery.data && (
        <ActorsHorizontalList
          className="bg-gray-200 rounded-md m-5"
          actors={actorsQuery.data}
        />
      )}
    </ScrollView>
  );
  s;
};

export default MovieScreen;
