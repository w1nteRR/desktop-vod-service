import { useEffect, useState } from 'react'
import axios from 'axios'

export const useScrollLoader = () => {

    const [index, setIndex] = useState(4)
    const [data, setData] = useState([])

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)
        
        return () => window.removeEventListener('scroll', scrollListener)
    
    }, [])

    useEffect(() => {
        let cleanUp = false

        const getPlaylists = async () => {
            try {
                const res = await axios.get(`/api/video/playlists/${index}`) 

                if(!cleanUp) {
                    setData(data.concat(res.data))
                }
            } catch (err) {
                console.log(err)
            }
        }

        getPlaylists()

        return () => {
            cleanUp = true
        }

    }, [index])

    
    const scrollListener = () => {
        let windowRelativeBottom = Math.abs(document.documentElement.getBoundingClientRect().bottom)  

        if(windowRelativeBottom > window.innerHeight + 200) setIndex(index + 4)
    }

    return {
        data
    }
}