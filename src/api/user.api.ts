import { api } from './api'

export const userApi = {
    changeUsername: async (username: string, token: string | null) => {
        try {

            const result = await api.put('/api/user/username', {
                username,
                token
            })

            return result.data

        } catch (err) {
            throw (err)
        }
    }
}