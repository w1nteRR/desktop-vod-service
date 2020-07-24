import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { searchReducer } from './search/reducer'
import { appReducer } from './app/reducer'

import { SearchState } from './search/types'
import { SystemState } from './app/types'

export const rootReducer = (history: History)  => 
    combineReducers({
        router: connectRouter(history),
        search: searchReducer,
        app: appReducer
    })

export type RootState = {
    search: SearchState,
    app: SystemState
}
