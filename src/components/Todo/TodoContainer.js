import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoContainer = () => {

    
    const todos = useSelector(state => state.todos.listItem)
    const filterField = useSelector(state => state.todos.filter)
    const dispatch = useDispatch()

    const changeItemStatus = (id) => {
        dispatch({type: "check", payload: id})
    }

    return (
        <div className="bg-white">
            <ul className="">
             {todos.length > 0 && todos.filter(el => el.isDone === (filterField === null? el.isDone : filterField)).map((el) => <TodoItem id={el.id} todoData={el} changeItemStatus={changeItemStatus} />)}
            </ul>
            <footer className="relative bg-white shadow-md">
               <div className="flex items-center text-sm font-normal text-gray-500 border py-2 px-3 todo-footer">
               <div>
                    {todos && todos.filter(el => el.isDone === false).length} item left
                </div>
                <ul className="flex flex-1 justify-center hover-todos">
                    <li className={`px-2 py-0.5 rounded ${filterField === null ? `border border-red-400` : `` }`} onClick={() => dispatch({type: "changeFilter", payload: null})} >All</li>
                    <li className={`mx-2 px-2 py-0.5 rounded ${filterField === false ? `border border-red-400` : `` }`} onClick={() => dispatch({type: "changeFilter", payload: false})} >Active</li>
                    <li className={`px-2 py-0.5 rounded ${filterField === true ? `border border-red-400` : `` }`} onClick={() => dispatch({type: "changeFilter", payload: true})} >Completed</li>
                </ul>
                <button className="hidden md:block xl:block 2xl:block">Clear Completed</button>
                <button className="md:hidden xl:hidden 2xl:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg></button>
               </div>
            </footer>
        </div>
    )
}

export default TodoContainer
