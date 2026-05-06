import Box from '@/componets/Box';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function FullHeighColumn() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>
                    <h1>Full heigh columns</h1>
                </Text>
                <View style={styles.fullHeight}>
                    <Box num={1} flex={1} />
                    <Box num={2} flex={1} />
                </View>
                <Link href='/exploreGridLayout' style={styles.link}>Goto Grid Layout</Link>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 800,
    },
    fullHeight: {
        flexDirection: 'row',
        gap: 20,
        marginHorizontal: 10,
        height: '90%',
    },
    link: {
        backgroundColor: 'blue',
        borderColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: 80,
        marginTop: 10,
        alignSelf: 'center',
    }
})