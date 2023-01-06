import React from 'react'

const TitleBar = ({titleLeft, titleCenter, titleRight, className}) => {
    return (
        <div className="">
            {titleCenter ?
                <h2 className={" font-bold text-center px-2"} >{titleCenter}</h2>
                :
                <div className="flex justify-between px-2">
                    <h2 className={" font-bold text-center px-2"} >{titleLeft}</h2>
                    <h2 className={" font-bold text-center px-2"} >{titleRight}</h2>
                </div>
            }
        </div>
    )
}

export default TitleBar
