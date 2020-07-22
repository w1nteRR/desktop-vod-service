import React, { FC } from 'react'
import { History } from 'history'

import { Background } from './components/shared/utils/layout'

import { useRoutes } from './routes/useRoutes'

interface AppProps {
    history: History
}

const App: FC<AppProps> = ({ history }) => {

    const routes = useRoutes(history)
    
    return (
        <Background>
        {routes}
        </Background>
    )
}

export default App