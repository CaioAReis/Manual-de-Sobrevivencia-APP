import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: "#099e4f",
        
    },
    infoSection: {
        paddingLeft: 20,
        paddingBottom: 10
    },
    titleC: {
        fontSize: 19,
        color: '#FFF',
        fontWeight: 'bold',
        paddingLeft: 31,
        paddingTop: 7
    },
    title: {
        fontSize: 19,
        // marginTop: -5,
        paddingLeft: 15,
        color: '#FFF',
        fontWeight: 'bold',
    },
    drawerSection: {
        paddingTop: 10,
        // paddingBottom: 5,
        backgroundColor: '#046b2f',
        // borderTopColor: "#c9c5c1",
        // borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});