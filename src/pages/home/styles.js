import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    contaier: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: "#f2f2f2",
    },
    titlePage: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 2,
        marginBottom: 10,
        borderColor: '#c2c2c2'
    },
    titleText: {
        paddingBottom: 15,
        fontSize: 25,
        fontWeight: 'bold',
    },
    viewBottom: {
        marginBottom: 15
    },
    buttom: {
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 2,
        borderColor: '#04803d',
        borderRadius: 20,
        backgroundColor: '#099e4f',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 20,
        elevation: 7,
    },
    footer: {
        paddingBottom: 30,
        paddingTop: 20,
        marginTop: 10,
        borderTopWidth: 2,
        borderTopColor: '#c2c2c2'
    }
});