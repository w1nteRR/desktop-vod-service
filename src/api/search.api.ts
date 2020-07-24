import { api } from './api'

import { IFilmCard } from '../interfaces/film/IFilm.card'

export const searchApi = {
    byName: async (value: string) => {
        try {

            const films = await api.get<Array<IFilmCard>>(`/api/search/film/${value}`)

            return films.data

        } catch (err) {
            throw(err)
        }
    }
}