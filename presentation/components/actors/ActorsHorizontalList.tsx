import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { useEffect, useRef } from "react";
import { View, Text, FlatList } from "react-native";
import ActorCard from "./ActorCard";

interface Props {
  actors: Cast[];
  title?: string;
  className?: string;
}

const ActorsHorizontalList = ({ title, actors, className }: Props) => {
  return (
    <View className={`${className}`}>
      <Text className="text-3xl font-bold px-4 my-2">
        {title ? title : "Actores"}
      </Text>

      <FlatList
        horizontal
        data={actors}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <ActorCard
            id={item.id}
            name={item.name}
            avatar={item.avatar}
            character={item.character}
          />
        )}
      />
    </View>
  );
};

export default ActorsHorizontalList;
