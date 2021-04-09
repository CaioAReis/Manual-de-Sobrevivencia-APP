import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F2F2F2',
        marginTop: 57
    },
    profileContainer: {
        overflow: 'hidden',
        backgroundColor: '#099e4f',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingTop: 10,
        marginBottom: 20,
        borderWidth: 1.5,
        borderColor: '#046b2f',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 12,
    },
    photo: {
        backgroundColor:"#099e4f", 
        alignSelf: 'center'
    },
    viewImg: {
        height: 170,
        width: 170,
        alignSelf: 'center',
        backgroundColor: '#FFF', 
        borderRadius: 200,
        borderWidth: 2,
        borderColor: '#046b2f'
    },
    
    textProfile: {
        paddingTop: 5,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        lineHeight: 30,
    },
    textInfo: {
        fontSize: 17,
        paddingTop: 8,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 23,
        marginBottom: 2,
        marginTop: 5
    },
    userTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userContact: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingTop: 10
    }
});