import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

const menu_icon = require('../assets/images/menu_btn.png');
const cnn_logo = require('../assets/images/cnn_logo.png');

const Header = () => {
    return (
        <View style={styles.main}>
            <div style={styles.logo_container}>
                <Image source={menu_icon} style={styles.logos} />
                <Image source={cnn_logo} style={styles.logos} />
            </div>
            <div>
                <button>log in</button>
            </div>
        </View>
    )
}

const styles = StyleSheet.create({
    logos: { height: 60, width: 60 },
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        top: 0,
    },
    logo_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 220,
    }
})

export default Header;