import React from 'react'
// import { StatusBar } from 'expo-status-bar';
// <StatusBar style="auto" />
// <StatusBar barStyle="light-content" />
import { StackNavigator } from "react-navigation"
import { Provider } from "react-redux"

import store from "./store/store"
import Home from "./pages/Home"
import List from "./pages/List"

const RouteApp = StackNavigator({
    Home: {screen: Home},
    List: {screen: List}
})

const App = (props)=>{
    return (
        <Provider store={store}>
            <RouteApp></RouteApp>
        </Provider>
    )
}

export default App

// export default class App extends React.Component{
//     render(){
//         return(
//             <Home></Home>
//         )
//     }
// }
