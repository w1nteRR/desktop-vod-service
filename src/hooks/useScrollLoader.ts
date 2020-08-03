import { useEffect, useState } from 'react'
import axios from 'axios'

export const useScrollLoader = () => {

    const [isEnd, setisEnd] = useState(false)
    const [index, setIndex] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)
        
        return () => window.removeEventListener('scroll', scrollListener)
    
    }, [])


    useEffect(() => {
        if(isEnd) {    
             const getPlaylists = async () => {
                try {
                    const res = await axios.get(`/api/video/playlists/${index}`) 
                    setData(data.concat(res.data))

                    setIndex(index + 4)
                    setisEnd(false)

                } catch (err) {
                    console.log(err)
                }
            }
            getPlaylists()
        }
    }, [isEnd])

    

    const scrollListener = () => {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom + 10   
                
        if (windowRelativeBottom <= window.innerHeight + 20)  {
            setisEnd(true)
        }
    }

    return {
        data
    }
}