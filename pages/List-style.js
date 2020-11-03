import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        margin: 10,
        marginBottom: 5,
        padding: 5,
        borderRadius: 5
    },
    itemImg: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    itemText: {
        flex: 1,
        display: "flex"
    },
    itemTitle: {
        fontWeight: "bold"
    },
    itemDesc: {
        lineHeight: 20,
        color: "#666666"
    }
})


export default styles