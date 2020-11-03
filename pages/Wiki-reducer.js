import wikiJson from "../assets/mock/wiki.json"

const defaultState = {
    categories: []
}
const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case "get-categories":
            return {
                categories: [...wikiJson.data.categories]
            }
    }
    return state
}

export default reducer