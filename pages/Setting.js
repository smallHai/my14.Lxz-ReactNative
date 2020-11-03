import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default class Setting extends React.Component{

    render(){
        return(
            <View style={styles.wrapper}>
                <Text>本来此处要做一个开关（Switch组件）来控制Maps组件（即底部百度食品标签）的显示隐藏</Text>
                <Text>具体做法</Text>
                <Text>设置一个setting-reducer来创建全局状态，绑定Switch的value</Text>
                <Text>给Switch的onValueChange事件dispatch一个action来改变绑定的值的true和false</Text>
                <Text>在Home组件，取到这个值进行显示隐藏控制</Text>
                <Text>当值改变的时候，还要用react-native的AsyncStorage将值存储下来</Text>
                <Text>最后当Home组件加载的时候，还要先取AsyncStorage的值来对Switch的value进行初始化</Text>
                <Text>============</Text>
                <Text>不过最后放弃了，因为最新版的react-redux和react-navigation1.x不兼容</Text>
                <Text>导致一旦用了react-redux的connect在react-navigation1.x的路由下会报不是一个组件的错误</Text>
                <Text>解决方法是将react-redux的版本换成5.0.7</Text>
                <Text>放弃解决是因为留个警示，防止以后出现同样问题找不到原因</Text>
                <Text>至于为什么用react-navigation1.x版本，因为该版本中有StackNavigator方法</Text>
                <Text>该方法可以很方便的构建react路由</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    wrapper: {
        margin: 20
    }
})