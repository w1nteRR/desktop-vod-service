import { useEffect, useState } from "react"

import { watchLaterApi } from "../../api/library.api"

export const useWatchLater = (_id: string) => {

    const [refresh, setRefresh] = useState(false)

    const token = localStorage.getItem('token')

    const remove = async () => {
        try {

            await watchLaterApi.remove(_id, token)
            setRefresh(prev => !prev)

        } catch (err) {
            console.log(err)
        }
    }

    const add = async () => {
        try {

            await watchLaterApi.add(_id, token)
            setRefresh(prev => !prev)

        } catch (err) {
            console.log(err)
        }
    }

    const getStatus = async () => {
        try  {

            const res = await watchLaterApi.status(_id, token)
            return res.watchLater

        } catch (err) {
            console.log(err)
        }
    }
    
    return {
        remove,
        add,
        getStatus,
        status,
        refresh
    }
}

