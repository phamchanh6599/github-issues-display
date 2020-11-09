import { ADD_ITEM } from "../constants/actions-type";

const initialState = {
    listVisitedIssues: []
};

const checkDuplicateItem = (state, item) => {
    const {listVisitedIssues} = state || {}
    
    const duplicateItem = listVisitedIssues.find(x => {
        return item.id === x.id
    })
    return duplicateItem?.id ? true : false
}

const handleAddItem = (state, item) => {
    const {listVisitedIssues} = state || {}

    if (listVisitedIssues.length === 5) {
        const isDuplicate  = checkDuplicateItem(state, item)
        if (isDuplicate) return state
        listVisitedIssues.shift()
        listVisitedIssues.push(item)
        return state
    }
    listVisitedIssues.push(item)
    return state
}

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        const newState = Object.assign({}, state);
        const listItems = handleAddItem(newState, action.payload)
        state = {...listItems}
        return state
    }
    return state;
}

export default rootReducer;