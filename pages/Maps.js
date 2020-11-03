import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { WebView } from "react-native-webview"

export default class Maps extends React.Component{

    render(){
        return(
            <View style={styles.wrapper}>
                {/* <Text style={styles.title}>百度食品</Text> */}
                <WebView
                    style={styles.content}
                    source={{uri: "https://baike.baidu.com/item/%E9%A3%9F%E5%93%81/174284"}}
                />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    title: {
        width: "100%",
        height: 30,
        lineHeight: 30,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        flex: 1
    }
})