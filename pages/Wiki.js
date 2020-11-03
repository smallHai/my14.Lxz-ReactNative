import React from 'react';
import { connect } from "react-redux"
import styles from "./Wiki-style"
import {
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native'


class Wiki extends React.Component{

    componentDidMount(){
        this.props.getCategories()
    }

    render(){
        const { width } = Dimensions.get("window")
        return (
            <View style={styles.wrapper}>
                <Image style={{width: width}} source={require("../assets/imgs/banner.png")}/>
                <TextInput
                    style={[styles.search,{top:width*0.4}]}
                    placeholder="请输入搜索内容"
                    underlineColorAndroid="#ffffff"
                />
                <ScrollView style={styles.content}>
                    <View style={styles.list}>
                        {
                            this.props.categories.map(item=>{
                                return (
                                    <TouchableWithoutFeedback
                                        key={item.id}
                                        onPress={()=>this.props.navigate("List", {id: item.id})}
                                    >
                                        <View style={[{width:(width-20)/3},styles.item]}>
                                            <Image source={{uri:item.imgUrl}} style={styles.itemImg} />
                                            <Text>{item.title}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const mapState = (state)=>{
    return{
        categories: state.wike.categories
    }
}
const mapDispatch = (dispatch)=>{
    return{
        getCategories(){
            // fetch("/assets/mock/index.json").then(res=>res.json()).then(data=>{
            //     alert(data)
            // }).catch(err=>{console.log(err)})
            dispatch({
                type: "get-categories"
            })
        }
    }
}

export default connect(mapState, mapDispatch)(Wiki)
