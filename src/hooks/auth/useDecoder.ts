import decode from 'jwt-decode'

import { IJwt } from '../../interfaces/auth/Auth'

export const useDecoder = (token: string): IJwt => decode(token)