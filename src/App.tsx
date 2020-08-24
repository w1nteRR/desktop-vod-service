import React, { FC } from 'react'
import { History } from 'history'
import { useSelector } from 'react-redux'

import { System } from './components/System/System'

import { useAuth } from './hooks/auth/useAuth'
import { useRoutes } from './routes/useRoutes'

import { RootState } from './redux/rootReducer'

interface AppProps {
    history: History
}

const App: FC<AppProps> = ({ history }) => {

    useAuth()
    const auth = useSelector((state: RootState) => state.auth.isAuthenticated)
    const routes = useRoutes(history, auth)
    
    return (
        <>
        {routes}
        <System />
        </>
    )
}

export default App