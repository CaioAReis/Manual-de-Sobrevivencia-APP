import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    contaier: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 20,
    },
});