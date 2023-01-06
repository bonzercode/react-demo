import React from 'react'

const SubTitle = ({titleLeft, titleCenter, titleRight, className}) => {
    return (
        <div className="text-sm text-gray-500">
            {titleCenter ?
                <h2 className={" font-bold text-center px-2"} >{titleCenter}</h2>
                :
                <div className="flex justify-between px-2">
                    <h3 className={" font-bold text-center px-2"} >{titleLeft}</h3>
                    <h3 className={" font-bold text-center px-2"} >{titleRight}</h3>
                </div>
            }
        </div>
    )
}

export default SubTitle
