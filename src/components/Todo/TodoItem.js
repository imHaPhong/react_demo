import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const TodoItem = ({ todoData, changeItemStatus, id, ...props }) => {
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()

    const userChecked = () => {
        setIsChecked(p => !p)
    }


    const { title, isDone, editing } = todoData

    return (
        <li {...props} className="py-2 border border-b-0 px-3 border-gray-100 flex"  >
            <input type="radio" className=" focus:outline-none opacity-0 absolute " name="listItem" />

            <label className="flex items-center" onClick={() => changeItemStatus(id)}>
                <span className={`h-8 w-8 border mr-5 rounded-full ${isDone ? `border-green-300` : ``} flex justify-center items-center`}>
                    {isDone && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>}
                </span>

            </label>
            <p className={`flex-1 font-medium break-all  ${isDone ? `line-through text-gray-300 transition duration-200` : ''}`}>{title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => {dispatch({type: "remove", payload: id})}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </li>
    )
}

export default TodoItem
