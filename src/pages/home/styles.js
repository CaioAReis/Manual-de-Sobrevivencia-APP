import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    contaier: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: "#f2f2f2",
        marginTop: 57
    },
    titlePage: {

        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 10,
    },
    titleText: {
        paddingBottom: 15,
        fontSize: 25,
        fontWeight: 'bold',
    },
    viewBottomxS: {
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
        marginBottom: 15
    },
    buttonName: {
        color: '#FFF', 
        fontSize: 23, 
        fontWeight: 'bold'
    },
    footer: {
        paddingBottom: 30,
        paddingTop: 20,
        marginTop: 10,
        borderTopWidth: 2,
        borderTopColor: '#c2c2c2'
    },
    textFooter: {
        color: '#a3a3a3', 
        fontSize: 10, 
        textAlign: 'center'
    },
    viewNull: {
        width: 27,
    }
});