import { useState } from "react"

import { watchLaterApi } from "../../api/library.api"

export const useWatchLater = (token: string) => {

    const [refresh, setRefresh] = useState(false)

    const remove = async (_id: string) => {
        try {

            await watchLaterApi.remove(_id, token)
            setRefresh(prev => !prev)

        } catch (err) {
            console.log(err)
        }
    }

    const add = async (_id: string) => {
        try {

            await watchLaterApi.add(_id, token)
            setRefresh(prev => !prev)

        } catch (err) {
            console.log(err)
        }
    }

    const getStatus = async (_id: string) => {
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

