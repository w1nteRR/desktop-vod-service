import React, { FC, useEffect, useState } from 'react'

import { ButtonWl } from '../../shared/styled/buttons/Buttons.shared'

import { useWatchLater } from '../../../hooks/library/useWatchLater'
import { useAuth } from '../../../hooks/auth/useAuth'

export const Control: FC<{ _id: string }> = ({ 
    _id, 
}) => {
   
    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(true)
    
    const { token } = useAuth()

    const { add, remove, getStatus, refresh } = useWatchLater(token!)

    useEffect(() => {
        (async () => {

            if(!token) return

            try {
                setStatus(await getStatus(_id))
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [refresh, token])

    if(!token) return null

    if(loading) return <p>loading</p>
    
    return <ButtonWl isWatchLater={status} onClick={() => status ? remove(_id) : add(_id)} />    
}