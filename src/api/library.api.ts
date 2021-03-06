import { api } from './api'

export const watchLaterApi = {
    remove: async (_id: string, token: string | null) => {
        try {

            const result = await api.put('/api/library/watch-later/remove', 
            {
                _id
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            return result.data

        } catch (err) {
            throw err
        }
    },
    add: async (_id: string, token: string | null) => {
        try {

            const result = await api.put('/api/library/watch-later/add', 
            {
                _id
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            return result.data

        } catch (err) {
            throw err
        }
    },
    status: async (_id: string, token: string | null) => {
        try {

            const result = await api.post('/api/library/watch-later/status', 
            {
                _id
            }, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }   
            })

            return result.data

        } catch (err) {
            throw err
        }
    }
}