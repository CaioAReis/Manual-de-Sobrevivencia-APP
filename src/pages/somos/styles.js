import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    // topSide: {
    //     backgroundColor: 'gray',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
    profileContainer: {
        backgroundColor: 'red',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingTop: 10,
        marginBottom: 10,
    },
    viewImg: {
        height: 170, 
        width: 170, 
        alignSelf: 'center', 
        backgroundColor: '#FFF', 
        borderRadius: 200
    },
    
    textProfile: {
        paddingTop: 5,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textInfo: {
        fontSize: 17,
        paddingTop: 8,
        color: '#FFF',
        textAlign: 'justify',
        lineHeight: 23,
        marginBottom: 2,
        marginTop: 5
    }
});