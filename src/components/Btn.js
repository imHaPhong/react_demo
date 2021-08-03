import React from 'react'

const Btn = ({label, className, ...props}) => {
    return (
        <button className={`bg-gray-600 border border-black text-white w-full font-bold py-6 cursor-pointer hover:text-black hover:border-gray-500 ${className}`} {...props} >
            {label}
        </button>
    )
}

export default Btn
