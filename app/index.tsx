import { Link } from 'expo-router';
import { ScrollView, View, useWindowDimensions } from "react-native";
import Header from "../componets/header";
import TrendingNews from "../componets/TrendingNews";
import data from '../public/news.json';
export default function Index() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <TrendingNews news={data.News1} />
        <TrendingNews news={data.News2} />
        <TrendingNews news={data.News3} />
        <TrendingNews news={data.News4} />
        <Link href="/explore_flexbox">Goto Explore Flexbox</Link>
      </View>
    </ScrollView>
  );
}
