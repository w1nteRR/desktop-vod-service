import os from 'os'
import { setPassword, getPassword, deletePassword } from 'keytar'

const keytarService = 'jwt'
const keytarAccount = os.userInfo().username

async function getToken () {
    try {

        return await getPassword(keytarService, keytarAccount)

    } catch (err) {
        throw err
    }
}

async function saveToken (token: string) {
    try {

        await setPassword(keytarService, keytarAccount, token)

    } catch (err) {
        throw err
    }
}

async function logout () {
    try {

        await deletePassword(keytarService, keytarAccount)

    } catch (err) {
        throw err
    }
}

export default ({
    getToken,
    saveToken,
    logout
})
