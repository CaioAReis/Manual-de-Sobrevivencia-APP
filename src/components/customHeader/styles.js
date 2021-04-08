import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    customHeader:{
        // display: 'flex',
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
    input: {
        position: 'absolute',
        height: 40,
        width: 200,
        // borderWidth: 1,

        backgroundColor: 'white',
        borderRadius: 6,
        paddingLeft: 10,
        fontSize: 18,
        color: '#04803d',
        lineHeight: 50,
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
    }
});