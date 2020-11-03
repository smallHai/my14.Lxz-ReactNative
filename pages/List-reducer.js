/*

说明：本来是要用react-redux来管理List组件里的数据
但是由于用了react-redux的connect，在App.js中的RouteApp识别不了路由
导致一直报错，所以List组件恢复成没用react-redux
因此本js全部注释掉

至于为啥用了connect，路由就识别不了组件
原因1：可能是因为版本原因，react-redux是最新版
而react-navigation用的是1.x版本，react-navigation目前最新版是5.x
原因2：也可能是因为还要做什么兼容处理
暂时还无解 -2020.10.23
解决：将react-redux的版本换成5.0.7就可以了

解决警告问题
警告1：Warning: Failed prop type: TabNavigator: prop type `tabBarStyle` is invalid
这个警告是react-native-tab-navigator这个组件本身的问题
解决：在node_modules下找到react-native-tab-navigator的TabNavigator.js
将static propTypes改为下面的代码即可
static propTypes = {
    ...ViewPropTypes,
    sceneStyle: ViewPropTypes.style,
    // tabBarStyle: TabBar.propTypes.style,
    tabBarStyle: ViewPropTypes.style,
    tabBarShadowStyle: TabBar.propTypes.shadowStyle,
    hidesTabTouch: PropTypes.bool
};

警告2：Warning: componentWillReceiveProps has been renamed
解决1：仔细看警告内容，看看发生的位置，然后定位到文件
将componentWillReceiveProps改成componentDidUpdate
解决2：使用react16.4及以下版本

======================================================================

import wikiJson from "../assets/mock/wiki.json"
import listJson from "../assets/mock/list.json"
import categoryListJson from "../assets/mock/categorylist.json"

const defaultState = {
    list:[],
    refreshing: false
}
const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case "get-list":
            return {
                list: [...listJson.data.list],
                refreshing: false
            }
        case "get-category-list":
            return {
                list: [...categoryListJson.data.list],
                refreshing: false
            }
        case "refresh-list":
            return {
                list: [...state.list],
                refreshing: true
            }
    }
    return state
}

export default reducer
*/