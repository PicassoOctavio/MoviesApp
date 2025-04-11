import { View, Text } from "react-native";
import React from "react";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { Fortmatter } from "@/config/helpers/formatter";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text>- {movie.genres.join(", ")}</Text>
      </View>
      <View className="bg-gray-200 rounded-md px-4 py-4 mt-4">
        <Text className="font-bold">Historia</Text>
        <Text className="font-normal mt-2">{movie.description}</Text>
      </View>

      <Text className="font-bold mt-2 text-2xl">
        Presupuesto: {Fortmatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
