import { createStore, combineReducers } from "redux"

import WikiReducer from "../pages/Wiki-reducer"
// import ListReducer from "../pages/List-reducer"

const reducer = combineReducers({
    wike: WikiReducer
    // list: ListReducer
})

const store = createStore(reducer)
export default store