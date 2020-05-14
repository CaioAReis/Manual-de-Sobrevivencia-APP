import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    contaier: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 20,
        backgroundColor: "#f2f2f2"
    },
    titlePage: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});