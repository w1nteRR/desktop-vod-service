import { userApi } from "../../api/user.api"

export const useUser = () => {
    const token = localStorage.getItem('token')

    const changeUsername = async (username: string) => {
        try {

            await userApi.changeUsername(username, token)

        } catch (err) {
            console.log(err)
        }
    }

    return {
        changeUsername
    }
}