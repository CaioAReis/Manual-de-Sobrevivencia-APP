import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    drawerContent: {
        flex: 1,
        // backgroundColor: 'green'
    },
    infoSection: {
        paddingLeft: 20,
        // backgroundColor: "red"
    },
    titleC: {
        fontSize: 18,
        paddingLeft: 31,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        marginTop: -5,
        paddingLeft: 15,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        // marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 10,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
    },
    socialSection: {
        flexDirection: 'row',
        paddingLeft: 8
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});