import React from 'react'

import listJson from "../assets/mock/list.json"
import categoryListJson from "../assets/mock/categorylist.json"

import styles from "./List-style"
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList
} from 'react-native'


export default class List extends React.Component{

    static navigationOptions = {
        title: "列表",
        headerStyle: {
            backgroundColor: "#eeeeee"
        }
    }

    constructor(props){
        super(props)
        this.state = {
            list: [],
            refreshing: false
        }
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    componentDidMount(){
        this.getStateList()
    }

    render(){
        return (
            <FlatList
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                data={this.state.list}
                keyEXtractor={(item,index)=>{return index}}
                renderItem={({item})=>{
                    return (
                        <View style={styles.item}>
                            <Image style={styles.itemImg} source={{uri:item.imgUrl}} />
                            <View style={styles.itemText}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.itemDesc}>{item.desc}</Text>
                            </View>
                        </View>
                    )
                }}
            >
            </FlatList>
        )
    }

    getStateList(){
        let id = 0
        if(this.props.navigation){
            id = this.props.navigation.state.params.id
        }
        // let oldList = this.state.list
        if(id ===0){
            this.setState({
                // list: [...oldList, ...listJson.data.list],
                list: listJson.data.list,
                refreshing: false
            })
        }else{
            this.setState({
                // list: [...oldList, ...categoryListJson.data.list],
                list: categoryListJson.data.list,
                refreshing: false
            })
        }
        // fetch("/assets/mock/index.json").then(res=>res.json()).then(data=>{
        //     alert(data)
        // }).catch(err=>{console.log(err)})
    }

    handleRefresh(){
        // 不完善
        this.setState({
            refreshing: true
        })
        this.getStateList()
    }
}



/*
<ScrollView>
    {
        this.state.list.map(item=>{
            return(
                <View style={styles.item} key={item.id}>
                    <Image style={styles.itemImg} source={{uri:item.imgUrl}} />
                    <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDesc}>{item.desc}</Text>
                    </View>
                </View>
            )
        })
    }
</ScrollView>
*/