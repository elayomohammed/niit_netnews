import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
export default function Row({ children }: PropsWithChildren) {
    return (
        <View style={styles.container}>{children}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});