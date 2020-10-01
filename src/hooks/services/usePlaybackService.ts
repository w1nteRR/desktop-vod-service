import { useState } from 'react'
import io from 'socket.io-client'

export const usePlaybackService = () => {

    const [serviceStatus, setStatus] = useState(false)

    const socket = io('http://localhost:7000')

    socket.on('connect', () => {
        setStatus(socket.connected)
    })

    return {
        serviceStatus,
        socket
    }
}