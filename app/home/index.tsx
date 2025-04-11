import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMovies } from "@/presentation/hooks/useMovies";
import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } =
    useMovies();
  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4">MoviesApp</Text>

        {/* Carrousel de imagenes */}
        <MainSlidesShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MoviesHorizontalList
          movies={popularQuery.data ?? []}
          title="Populares"
          className="mb-5 bg-slate-200 pb-5"
        />

        {/* Upcoming */}
        <MoviesHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Próximamente"
          className="mb-5"
        />

        {/* Top Rated */}
        <MoviesHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title="Mejor Calificadas"
          className="mb-5 bg-slate-200 pb-5"
          loadNextPage={() => topRatedQuery.fetchNextPage()}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
