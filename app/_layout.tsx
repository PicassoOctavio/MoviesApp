import { View, Text } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../global.css";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { Stack } from "expo-router";

const RootLayout = () => {
  nowPlayingAction();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
};

export default RootLayout;
