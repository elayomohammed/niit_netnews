import { Link, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import Header from "../componets/header";
import TrendingNews from "../componets/TrendingNews";
import data from '../public/news.json';
export default function Index() {

  // router instance
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  //handling route parameters with useRouter() hook
  function routeData() {
    return router.push({
      pathname: '/navigation_basics',
      params: {
        username: 'super user',
        userInfo: 'super user information',
      }
    })
  }
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
        <View>
          <Link href="/explore_flexbox" style={styles.link}>Goto Explore Flexbox</Link>
          <button onClick={routeData} style={styles.link}>Goto Navigation Basics</button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: 'blue',
    color: '#ffffff',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  }
})
