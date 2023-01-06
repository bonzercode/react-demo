import { Button } from '@mui/material'
import React from 'react'

const ButtonWithAction = ({onClick, title, className, type}) => {
    return (
        <Button onClick={onClick} className={className} type={type}> {title} </Button>
    )
}

export default ButtonWithAction
