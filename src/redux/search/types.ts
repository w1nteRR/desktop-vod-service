import { ThunkAction } from 'redux-thunk'

import { IFilmCard } from '../../interfaces/film/IFilm.card'
import { IFilter, ISearchData } from '../../interfaces/filter/IFilter'
import { RootState } from '../rootReducer'

export const GET_FILMS_BY_NAME = 'GET_FILMS_BY_NAME'
export const INIT_TAGS = 'INIT_TAGS'
export const SET_ACTIVE_TAG = 'SET_ACTIVE_TAG'
export const SET_SEARCH_DATA = 'SET_SEARCH_DATA'

export interface SearchState {
    result: Array<IFilmCard>,
    tags: {
        genr: Array<IFilter>
        company: Array<IFilter>
        year: Array<IFilter>
    }
    searchData: ISearchData
}

interface GetFilmsByNameAction {
    type: typeof GET_FILMS_BY_NAME,
    payload: Array<IFilmCard>
}

interface InitTagsAction {
    type: typeof INIT_TAGS,
    payload: {
        genr: Array<IFilter>,
        company: Array<IFilter>
        year: Array<IFilter>
    }
}

interface SetActiveTagAction {
    type: typeof SET_ACTIVE_TAG,
    payload: {
        genr: Array<IFilter>,
        company: Array<IFilter>
        year: Array<IFilter>
    }
}

interface SetSearchDataAction {
    type: typeof SET_SEARCH_DATA,
    payload: {
        key: string,
        data: Array<IFilter>
    }
}

export type SearchActionTypes = GetFilmsByNameAction | InitTagsAction | SetActiveTagAction | SetSearchDataAction

export type SearchThunkType = ThunkAction<Promise<void>, RootState, unknown, SearchActionTypes>