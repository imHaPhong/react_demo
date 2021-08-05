import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TodoContainer from '../components/Todo/TodoContainer'

const TodoList = () => {

    const [value, setValue] = useState("")

    const dispatch = useDispatch()

    const inputHandler = (e) => {
        if(e.keyCode === 13) {
            if(value === "") return
            dispatch({type: "add", payload: value})
            setValue('')
        }

    }

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className=" flex flex-col w-screen md:w-8/12 mx-auto lg:w-4/12" >
            <h1 className=" text-6xl text-opacity-25 font-medium md:text-8xl text-red-400 text-center lg:mb-10">todos</h1>
            <div className="shadow-2xl">
                <div className="flex items-center px-1 text-xl bg-white w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <input type="text" value={value} onChange={onChangeHandler} onKeyDown={inputHandler} placeholder="What needs to be done?" className="w-full h-full py-4 flex-1 focus:outline-none placeholder-italic" />
                </div>
                <TodoContainer />
            </div>
        </div>
    )
}

export default TodoList
