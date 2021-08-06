import produce from "immer"
const intialSate = {
    listOperator: [],
    isCalculate: false,
    result: "",
    display: "",
    currentValue: ""
}

const calculation = (a) => {

    if(a.length === 1) {
        return a
    }

    if(a.length === 2) {
        if(a[a.length- 1].includes('-')) {
             a[0] = Number(a[0]) + Number(a[1])
            a.splice(1, 1);
            return
        }
    }

    for (let i = 0; i < a.length; i++) {
            if (a[i] == "*") {
                a[i - 1] = Number(a[i - 1] * a[i + 1])
                a.splice(i, 1);
                a.splice(i, 1);

            }
            if (a[i] === "/") {
                a[i - 1] = Number(a[i - 1] / a[i + 1])
                a.splice(i, 1);
                a.splice(i, 1);
            }
    }
    for (let i = 0; i < a.length; i++) {

        if (a[i] == "+") {
            a[i - 1] = Number(a[i - 1]) + Number(a[i + 1])
            a.splice(i, 1);
            a.splice(i, 1);

        }
        if (a[i] === "-") {
            a[i - 1] = Number(a[i - 1]) - Number(a[i + 1])
            a.splice(i, 1);
            a.splice(i, 1);
        }
    }
    if (a.length > 1) {
        calculation(a)
    } else {
        return a
    }
}

export const valueReducer = (state = intialSate, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case "addElement":
                let str = ""
                if(draft.isCalculate) {
                    draft.isCalculate = false
                    if(["+", "-", "*", "/"].includes(action.payload)) {
                        draft.listOperator = [draft.listOperator[draft.listOperator.length - 1], action.payload]
                        return
                    } 
                     draft.listOperator = [action.payload]
                     

                     return
                }

                if(!["+", "-", "*", "/"].includes(action.payload) &&  draft.listOperator[draft.listOperator.length - 1] === "-") {
                    draft.listOperator[draft.listOperator.length - 1] = `${draft.listOperator[draft.listOperator.length - 1]}${action.payload}`
                    return 
                }

                if (!["+", "-", "*", "/"].includes(action.payload) && draft.listOperator.length > 0 && !["+", "-", "*", "/"].includes(draft.listOperator[draft.listOperator.length - 1])) {
                    draft.listOperator[draft.listOperator.length - 1] = `${draft.listOperator[draft.listOperator.length - 1]}${action.payload}`
                }
                else {
                    draft.listOperator = draft.listOperator.concat(action.payload)
                }
                break
            case "caculate":
                draft.result = calculation(draft.listOperator)
                draft.isCalculate = true
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
