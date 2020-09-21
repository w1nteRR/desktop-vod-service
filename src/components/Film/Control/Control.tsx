import React, { FC, useEffect, useState } from 'react'

import { ButtonWl } from '../../shared/styled/buttons/Buttons.shared'

import { useWatchLater } from '../../../hooks/library/useWatchLater'

interface ControlProps {
    _id: string
    token: string
}

export const Control: FC<ControlProps> = ({ _id, token }) => {
   
    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(true)
    
    const { add, remove, getStatus, refresh } = useWatchLater(token)

    useEffect(() => {
        (async () => {
            try {
                setStatus(await getStatus(_id))
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [refresh])

    if(loading) return <p>loading</p>
    
    return <ButtonWl isWatchLater={status} onClick={() => status ? remove(_id) : add(_id)} />    
}