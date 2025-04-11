import { View, Text, Image } from "react-native";

interface Props {
  id: number;
  name: string;
  character: string;
  avatar: string;
}

const ActorCard = ({ id, name, character, avatar }: Props) => {
  return (
    <View className="mx-5 mb-4">
      <Image
        source={{ uri: avatar }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: 85,
          height: 130,
        }}
        resizeMode="cover"
      />
      <Text className="font-bold mt-5">{character}</Text>

      <Text className="font-normal mb-2">{name}</Text>
    </View>
  );
};

export default ActorCard;
