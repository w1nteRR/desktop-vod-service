import { SearchState, SearchActionTypes, GET_FILMS_BY_NAME } from './types'

const initalState: SearchState =  {
    result: []
}

export const searchReducer = (state = initalState, action: SearchActionTypes ): SearchState => {
    switch(action.type) {
        case GET_FILMS_BY_NAME:
            return {
                result: action.payload
            }
        default:
            return state
    }
}