import { useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import type { UserProp } from './index';

export default function UserProfile() {
    const { userName, age, courses_offered } = useLocalSearchParams();
    console.log(typeof (courses_offered));
    const profileInfo: UserProp = {
        userName: 'NIIT Student',
        age: 29,
        courses_offered: ['React Native', 'Mongo DB', "Web Development"],
    }
    return (
        <View style={styles.container}>
            <Text>Name: {userName}</Text>
            <Text>Age: {age}</Text>
            <h3>Courses Offered:</h3>
            <FlatList
                data={profileInfo.courses_offered}
                renderItem={({ item, index }) => {
                    return <li key={index}>{item}</li>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})