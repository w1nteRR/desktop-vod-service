import React, { FC, useEffect, useRef } from 'react'
import ShakaPlayer from 'shaka-player-react'

import { usePlaybackService } from '../../hooks/services/usePlaybackService'

import 'shaka-player/dist/controls.css'


interface IPlayer {
    _id: string
    writePlayback: boolean
    token: string
}

export const Player: FC<IPlayer> = ({
    _id,
    writePlayback,
    token
}) => {
    
    const shaka = useRef(null)
    const { socket } = usePlaybackService()

    let interval: any = null


    useEffect(() => {
        socket.emit('playbackData', {
            _id,
            token
        })
    }, [])

    useEffect(() => {
        const { player, videoElement } = shaka.current

        async function loadAsset() {

            await player.load('/static/Witcher/final.mpd')

            videoElement.addEventListener('playing', () => {
                interval = setInterval(() => {
                    socket.emit('playbackProgress', videoElement.currentTime)
                }, 2000)
            })
                
            videoElement.addEventListener('pause', () => clearInterval(interval))
        }


        loadAsset()
    }, [])
    
    return <ShakaPlayer ref={shaka} />
}