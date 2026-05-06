import Box from "@/componets/Box";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExploreFlexbox() {
    return (
        <ScrollView style={styles.scroll}>
            <View>
                <Link href='/fullHeightColumn' style={styles.link}>
                    Goto full height column
                </Link>
                <Text>Exploring Flexbox</Text>
                <View>
                    <h3>Column</h3>
                    <View style={styles.box_container}>
                        <Box num={1} flex={1} />
                        <Box num={2} flex={1} />
                        <Box num={3} flex={1} />
                    </View>

                    <h3>Row</h3>
                    <View style={[styles.box_container, { flexDirection: 'row' }]}>
                        <Box num={1} flex={1} width={200} height={160} />
                        <Box num={2} flex={1} />
                        <Box num={3} flex={1} />
                    </View>
                </View>
            </View>
            <View>
                <View style={{ gap: 50, borderStyle: 'solid', borderColor: 'green', borderWidth: 1 }}>
                    <h3>Full width container</h3>
                    <View style={styles.full_width_box}>
                        <Box num={1} flex={1} />
                    </View>
                    <View style={styles.full_width_box}>
                        <Box num={2} flex={1} />
                    </View>
                    <View style={styles.full_width_box}>
                        <Box num={3} flex={1} />
                    </View>
                    <View style={styles.full_width_box}>
                        <Box num={4} flex={1} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingRight: 15,
        paddingLeft: 15
    },
    box_container: {
        gap: 10
    },
    full_width_box: {
        height: 80,
        // marginTop: 10,
        marginBottom: 10
    },
    link: {
        backgroundColor: 'blue',
        borderColor: '#fff',
        padding: 5,
        borderRadius: 5,
    }
})