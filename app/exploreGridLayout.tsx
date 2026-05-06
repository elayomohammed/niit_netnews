import Box from "@/componets/Box";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ExploreGridLayout = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text>Exploring Grid Layouts</Text>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10,
        paddingHorizontal: 5,
        width: '100%',
    }
});

export default ExploreGridLayout;