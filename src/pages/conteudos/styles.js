import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: "#f2f2f2",
        // backgroundColor: "#222",
    },
    viewSup: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15
    },
    subTitle: {
        fontSize: 25,
        lineHeight: 25,
        paddingBottom: 20,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 25
    },
    textContainer: {
        marginBottom: 10,
    },
    mainText: {
        // color: '#FFF',
        textAlign: 'left',
        fontSize: 18,
        lineHeight: 25,
        paddingBottom: 16,
    },
    mainText2: {
        // color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 20,
        paddingBottom: 16
    },
    itemText: {
        fontSize: 17,
        paddingBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textLink: {
        color: 'red',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 20,
        paddingBottom: 18,
        fontWeight: 'bold'
    },
    libraryItems: {
        backgroundColor: '#c2c2c2', 
        borderRadius: 15, 
        padding: 10, 
        marginBottom: 15
    },
    line: {
        borderBottomWidth: 1, 
        borderColor: '#c2c2c2', 
        marginBottom: 20
    }
});