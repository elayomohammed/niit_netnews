import Box from '@/componets/Box';
import Column from '@/componets/Column';
import Row from '@/componets/Row';
import { StyleSheet, View } from 'react-native';

export default function ColumnsInsideRows() {
    return (
        <View style={styles.container}>
            <Row>
                <Column>
                    <Box num={1} height={100} width={100} />
                    <Box num={2} height={100} width={100} />
                </Column>
                <Column>
                    <Box num={3} height={100} width={100} />
                    <Box num={4} height={100} width={100} />
                </Column>
            </Row>

            <Row>
                <Column>
                    <Box num={5} height={100} width={100} />
                    <Box num={6} height={100} width={100} />
                </Column>
                <Column>
                    <Box num={7} height={100} width={100} />
                    <Box num={8} height={100} width={100} />
                </Column>
            </Row>

            <Row>
                <Column>
                    <Box num={9} height={100} width={100} />
                    <Box num={10} height={100} width={100} />
                </Column>
                <Column>
                    <Box num={11} height={100} width={100} />
                    <Box num={12} height={100} width={100} />
                </Column>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: '5%',
    }
});