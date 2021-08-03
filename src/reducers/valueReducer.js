import produce from "immer"
const intialSate = {
    listOperator: [],
    isCalculate: false,
    result: "",
    display: "",
    currentValue: ""
}

export const valueReducer = (state = intialSate, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case "changeLastElement":
                draft.listOperator.pop()
                draft.listOperator = [...draft.listOperator, action.payload]
                let str1 = ''
                draft.listOperator.map(el => str1 += el)
                draft.display = str1
                draft.currentValue = action.payload
                break
            case "changeSecondElement":
                draft.listOperator.pop()
                draft.listOperator.pop()
                draft.listOperator = [...draft.listOperator, action.payload]
                let str2 = ''
                draft.listOperator.map(el => str2 += el)
                draft.display = str2
                draft.currentValue = action.payload

                break
            case "addElement":
                if (draft.result !== "") {
                    if (typeof (action.payload) === "number") {
                        draft.listOperator =  [action.payload]
                        draft.display = action.payload
                        draft.currentValue = action.payload
                        draft.isCalculate = false
                        draft.result = ""
                        
                    } else {
                        draft.listOperator = [draft.result, action.payload]
                        draft.display = `${draft.result} ${action.payload}`
                        draft.currentValue = draft.result
                        draft.isCalculate = false
                        draft.result = ""
                    }
                    return
                }

                if(["+", "-", "*", "/"].includes(action.payload) || ["+", "-", "*", "/"].includes(draft.listOperator[draft.listOperator.length -1])) {
                    draft.currentValue = action.payload
                }else {
                    draft.currentValue += (action.payload).toString()
                }
                let str = ''
                draft.listOperator = [...draft.listOperator, action.payload]
                draft.listOperator.map(el => str += el)
                console.log(str)
                draft.display = str
                console.log('----')
                break
            case "caculate":
                if (typeof (draft.listOperator[0]) !== "number") {
                    draft.listOperator.unshift(0)
                }
                let caculateStr = ""
                draft.listOperator.map(el => caculateStr += el)
                draft.result = eval(caculateStr)
                draft.isCalculate = true
                break
            case "setResult":
                draft.listOperator.concat(action.payload)
                break
            case "reset":
                draft.listOperator = []
                draft.isCalculate = false
                draft.result = ""
                draft.display = ""
                draft.currentValue = ""
                break
            default:
                break
        }
    })
}