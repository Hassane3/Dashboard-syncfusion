import React from 'react'

const Button = ({ icon, bgColor, color, size, text, borderRadius, clickEvent }) => {
    return (
        <button
            type="button"
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
            onClick={clickEvent}
        >
            {icon}{text}
        </button>
    )
}

export default Button