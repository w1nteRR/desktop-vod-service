import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import { MainStack } from './stacks/Main.stack'


export const useRoutes = (history: History) => 
    <ConnectedRouter history={history}>
        <Switch>
            <Route path='/' component={MainStack} />
        </Switch>
    </ConnectedRouter>
    