import Box from "@/componets/Box";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";

const ExploreGridLayout = () => {
    const { width, height } = useWindowDimensions();
    const isPortrait = height >= width;
    return (
        <ScrollView style={{ flex: 1, flexDirection: isPortrait ? 'column' : 'row' }}>
            <Text style={{ textAlign: 'center' }}>Exploring Grid Layouts</Text>
            <ScrollView horizontal={isPortrait ? false : true}>
                <View style={styles.container}>
                    <Box num={1} height={100} width={100} />
                    <Box num={2} height={100} width={100} />
                    <Box num={3} height={100} width={100} />
                    <Box num={4} height={100} width={100} />
                    <Box num={5} height={100} width={100} />
                    <Box num={6} height={100} width={100} />
                    <Box num={7} height={100} width={100} />
                    <Box num={8} height={100} width={100} />
                    <Box num={9} height={100} width={100} />
                    <Box num={10} height={100} width={100} />
                </View>
            </ScrollView>
            <Link href={'/columnsInsideRows'}>Goto columns inside rows</Link>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10,
        paddingHorizontal: 5,
        width: '100%',
    }
});

export default ExploreGridLayout;