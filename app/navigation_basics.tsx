import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function NavigationBasics() {
    const { username, userInfo } = useLocalSearchParams();
    const router = useRouter();
    function handlenavigation() {
        return router.push('/');
    }
    return (
        <View style={styles.container}>
            <Link href='/' style={styles.link}>Goto Home</Link>
            <Pressable onPress={handlenavigation} style={styles.link}>
                <Text>Goto Home</Text>
            </Pressable>
            <View>
                <Text>Username: {username}</Text>
                <Text>User Info: {userInfo}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        backgroundColor: 'blue',
        color: '#ffffff',
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
    }
})