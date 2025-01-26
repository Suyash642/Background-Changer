import React from 'react'

function ContentArea({ heading, desc }) {
    return (
        <div className="flex-1 p-4 flex items-center justify-center">
            <h2 className="text-gray-800 text-2xl font-medium"> {heading} - {desc} </h2>
        </div>
    )
}

export default ContentArea
