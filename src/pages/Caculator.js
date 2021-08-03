import { useDispatch, useSelector } from 'react-redux';
import Btn from '../components/Btn';

const operators = ["+", "-", "*", "/"]


function Caculator() {
    const { listOperator, isCalculate, result, display,currentValue } = useSelector(state => state.value)
    const dispatch = useDispatch()

    const clickHandler = (data) => {

        if("." === data) {
            if(listOperator.includes(data)) return
        }

        if (operators.includes(listOperator[listOperator.length - 1]) && listOperator[listOperator.length - 1] === data) {
            return
        }
        // can toi uu
        if (["*", "/", "+"].includes(data)) {
            if (operators.includes(listOperator[listOperator.length - 1]) && !operators.includes(listOperator[listOperator.length - 2])) {
                dispatch({ type: "changeLastElement", payload: data })
                return
            }
            if (operators.includes(listOperator[listOperator.length - 1])
                && operators.includes(listOperator[listOperator.length - 2])
            ) {
                dispatch({ type: "changeSecondElement", payload: data })
                return
            }

        }
        if (data === "reset") return dispatch({ type: "reset" })

        if (data === "=") {
            if(listOperator.length === 0) {
                return
            }
            if(operators.includes(listOperator[listOperator.length - 1])) {
                dispatch({ type: "addElement", payload: 0 })
            }
            dispatch({ type: "caculate" })
            return
        }
        dispatch({ type: "addElement", payload: data })
    }

    return (
        <div className="flex items-center justify-center bg-gray-400 w-screen h-screen">
            <div className="bg-black px-1 py-1 w-10/12 container sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-2/12 ">
                <div className="w-full bg-black text-yellow-200 flex flex-col items-end slashed-zero text-2xl">
                    <div className="py-1 text-xl">
                        {!isCalculate ? display || 0 : `${display} = ${result}`}
                    </div>
                    <div className="py-1 text-white">
                        {result ? result : currentValue === ""? 0 : currentValue }
                    </div>
                </div>
                <div className="grid grid-cols-4 auto-rows-min grid-flow-row	">
                    {(new Array(9).fill(0)).map((el, index) => <Btn key={index} onClick={() => clickHandler(10 - (index + 1))} value={10 - (index + 1)} label={10 - (index + 1)} />)}
                    <Btn onClick={() => clickHandler(0)} value="0" label='0' className="col-span-2" />
                    <Btn onClick={() => clickHandler(".")} value="." label='.' />
                    <Btn onClick={() => clickHandler("+")} value="+" label='+' className="bg-gray-700 col-start-4 col-end-5 row-start-3 row-end-4" />
                    <Btn onClick={() => clickHandler("-")} value="-" label='-' className="bg-gray-700 row-start-2 row-end-3 col-start-4 col-end-5" />
                    <Btn onClick={() => clickHandler("*")} value="x" label='x' className="bg-gray-700 row-start-1 row-end-2 col-start-4 col-end-5" />
                    <Btn onClick={() => clickHandler("/")} value="/" label='/' className="bg-gray-700  row-start-1 row-end-1 col-start-3 col-end-4" />
                    <Btn onClick={() => clickHandler("=")} value="=" label='=' className=" row-start-4 row-span-2 col-start-4 col-end-5 bg-blue-800" />
                    <Btn onClick={() => clickHandler("reset")} value="AC" label='AC' className="bg-red-800 col-start-1 col-end-3 row-start-1 row-end-1 " />
                </div>
            </div>
        </div>
    );
}

export default Caculator;
