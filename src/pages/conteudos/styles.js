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
        paddingBottom: 25
    },
    subTitle: {
        fontSize: 20,
        lineHeight: 20,
        paddingBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
        fontSize: 25
    },
    textContainer: {
        marginBottom: 10,
    },
    mainText: {
        // color: '#FFF',
        textAlign: 'justify',
        fontSize: 18,
        lineHeight: 25,
        paddingBottom: 18
    },
    mainText2: {
        // color: '#FFF',
        textAlign: 'justify',
        fontSize: 18,
        lineHeight: 20,
        paddingBottom: 18
    },
    textLink: {
        color: 'red',
        textAlign: 'justify',
        fontSize: 18,
        lineHeight: 20,
        paddingBottom: 18,
        fontWeight: 'bold'
    }
});