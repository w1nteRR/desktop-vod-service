import { ThunkAction } from 'redux-thunk'

import { IFilmCard } from '../../interfaces/film/IFilm.card'

export const GET_FILMS_BY_NAME = 'GET_FILMS_BY_NAME'

export interface SearchState {
    result: Array<IFilmCard>
}

interface GetFilmsByNameAction {
    type: typeof GET_FILMS_BY_NAME,
    payload: Array<IFilmCard>
}

export type SearchActionTypes = GetFilmsByNameAction

export type SearchThunkType = ThunkAction<Promise<void>, SearchState, unknown, SearchActionTypes>