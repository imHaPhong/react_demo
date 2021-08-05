import produce from "immer"
const { uuid } = require('uuidv4');

const initialState = {
    filter: null,
    listItem: [
      
    ]    
}
export const todoItemReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case "changeFilter":
                draft.filter = action.payload
            break
            case "check":
            draft.listItem.map(el => {
                if( el.id === action.payload) {
                    el.isDone = !el.isDone
                }
                return el
            })
        break
            case "add":
                draft.listItem = draft.listItem.concat({
                    id: uuid(),
                    title: action.payload,
                    isDone: false,
                    editing: false
                })
            break
            case "edit":
            break;
            case "remove": 
            draft.listItem.splice(action.payload, 1)
            
            break
            default:
            break
        }
    })
}