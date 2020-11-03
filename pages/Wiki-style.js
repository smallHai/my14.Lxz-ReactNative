import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#dddddd"
    },
    search: {
        height: 40,
        lineHeight: 40,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        position: "absolute",
        left: 20,
        right: 20,
        backgroundColor: "#ffffff",
    },
    content: {
        flex: 1,
        margin: 10,
        // marginTop: 10,
        // marginRight: 10,
        // marginLeft: 10,
        // marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#ffffff"
    },
    list: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    itemImg: {
        width: 100,
        height: 100,
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 20
    }
})

export default styles