import React from 'react'
import flowchart from "../assets/flowchart.jpg"

const Flowchart = () => {
    return (
        <div className='w-full h-full flex items-center justify-center' >
            <img
                alt="flowchart"
                src={flowchart}
                className='w-full h-full'
            />
        </div>
    )
}

export default Flowchart