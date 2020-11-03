import React from 'react'
// import { StatusBar } from 'expo-status-bar';
// <StatusBar style="auto" />
// <StatusBar barStyle="light-content" />
import TabNavigator from "react-native-tab-navigator"
import { Image } from 'react-native'

import Wiki from "./Wiki"
import List from "./List"
import Maps from "./Maps"
import Setting from "./Setting"


export default class Home extends React.Component{

    static navigationOptions = {
        headerStyle: {
            height: 0
        }
    }

    constructor(props){
        super(props)
        this.state = {
            selected: "Wiki"
        }
    }

    handleSelectItem(value){
        this.setState({
            selected: value
        })
    }

    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    title="食品百科"
                    selected={this.state.selected ==="Wiki"}
                    renderIcon={()=><Image source={require("../assets/imgs/wiki.png")} />}
                    onPress={()=>this.handleSelectItem("Wiki")}
                >
                    <Wiki navigate={this.props.navigation.navigate}></Wiki>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="食品列表"
                    selected={this.state.selected ==="List"}
                    renderIcon={()=><Image source={require("../assets/imgs/list.png")} />}
                    onPress={()=>this.handleSelectItem("List")}
                >
                    <List></List>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="百度食品"
                    selected={this.state.selected ==="Maps"}
                    renderIcon={()=><Image source={require("../assets/imgs/list.png")} />}
                    onPress={()=>this.handleSelectItem("Maps")}
                >
                    <Maps></Maps>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="相关设置"
                    selected={this.state.selected ==="Setting"}
                    renderIcon={()=><Image source={require("../assets/imgs/list.png")} />}
                    onPress={()=>this.handleSelectItem("Setting")}
                >
                    <Setting></Setting>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }

}
