import { SearchActionTypes, SearchThunkType, GET_FILMS_BY_NAME } from './types'

import { IFilmCard } from '../../interfaces/film/IFilm.card'

import { searchApi } from '../../api/search.api'

const _setFilms = (films: Array<IFilmCard>): SearchActionTypes => ({
    type: GET_FILMS_BY_NAME,
    payload: films
})

export const getFilmsByName = (name: string): SearchThunkType => {
    return async dispatch => {
        try {

            const films = await searchApi.byName(name)

            dispatch(_setFilms(films))

        } catch (err) {
            console.log(err)
        }
    }
}