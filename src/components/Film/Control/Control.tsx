import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { ButtonWatch, ButtonWl } from '../../shared/styled/buttons/Buttons.shared'
import { Container } from '../../shared/utils/layout'
import { text } from '../../shared/utils/colors'

import { useWatchLater } from '../../../hooks/library/useWatchLater'

interface ControlProps {
    _id: string
}

export const Control: FC<ControlProps> = ({ _id }) => {
   
    const [status, setStatus] = useState(false)
   
    const history = useHistory()
    const { add, remove, getStatus, refresh } = useWatchLater(_id)
    
    useEffect(() => {
        async function status() {
            try {

                setStatus(await getStatus())
                
            } catch (err) {
                console.log(err)
            }
        }
        status()
    }, [refresh])

    return (
        <Container 
            p='20px 0' 
            justify='space-between'
        >
            <ButtonWatch 
                onClick={() => history.push(`/watch/${_id}`)} 
                iconColor='#fff'
            />
            <ButtonWl 
                isWatchLater={status} 
                onClick={() => status ? remove() : add()} 
            />
        </Container>
    )
}