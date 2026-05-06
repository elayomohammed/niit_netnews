import { StyleSheet, View } from "react-native";

type Props = {
    num: number;
    height?: number | string | any;
    width?: number | string | any;
    flex?: number;
}
export default function Box({ num, height, width, flex }: Props) {
    const styles = StyleSheet.create({
        box: {
            flex: flex,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#000000',
            borderStyle: 'solid',
        }
    })
    return (
        <View style={[styles.box, { height: height }, { width: width }]}>{num}</View>
    )
}
