import { StyleSheet } from 'react-native';
import { gray } from 'color-name';

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
        backgroundColor: '#099e4f', 
        height: 300, 
        borderRadius: 20, 
        alignItems: 'center', 
        // padding: 15,
        paddingTop: 10,
        paddingHorizontal:15,
        // marginTop: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 15,
    },
    viewImg: {
        backgroundColor: '#099e4f',
        borderRadius: 20, 
        height: 250, 
        alignSelf: 'stretch', 
        marginBottom: 4,
        alignItems: 'center'
    },
    textProfile: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});