import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    searchHeader: {
        backgroundColor: '#04803ea4', 
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 2000,
        width: '100%'
    },
    customHeader:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#099e4f',
        height: 57,
        borderBottomWidth: 2,
        borderColor: '#04803d',
    },
    customHeaderText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    inputView: {
        display: 'flex', 
        alignItems: 'center'
    },
    input: {
        height: 45, 
        width: '85%', 
        borderRadius: 200, 
        margin: 10, paddingLeft: 20,
        backgroundColor: '#fff',
        fontSize: 18,
    },
    pesquisaContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'relative',
        left: 0, right: 0, top: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        width: '100%',
        height: '100%',
        zIndex: 200
    },
    container: {
        width: '80%',
        height: '50%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 15
    },
    searchItems: {
        fontSize: 18,
        lineHeight: 30,
        textAlign: 'center',
        marginBottom: 10,

        backgroundColor: '#c2c2c2',
        borderRadius: 200,

        // borderWidth: 1, 
        // borderColor: 'red', 
        width: '90%'
    }
});