import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import { MainStack } from './stacks/Main.stack'

import { Home } from '../pages/Home'
import { Library } from '../pages/Library'
import { Browse } from '../pages/Browse'
import { Film } from '../pages/Film'
import { NavBar } from '../components/navigation/Nav.bar'
import { Search } from '../pages/Search'

import { SignIn } from '../pages/Auth/SignIn'
import { SignUp } from '../pages/Auth/SignUp'

export const useRoutes = (history: History, isAuth: boolean) => {
    if(isAuth) {
        return (
            <ConnectedRouter history={history}>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/browse' component={Browse} />
                    <Route path='/library' component={Library} />
                    <Route path='/film/:id' component={Film} />
                    <Route path='/search' component={Search} />

                    
                </Switch>
            </ConnectedRouter>
        )
    }

    return (
        <ConnectedRouter history={history}>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/browse' component={Browse} />
                <Route path='/film/:id' component={Film} />
                <Route path='/search' component={Search} />

                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />

                <Redirect to='/' />
            </Switch>
        </ConnectedRouter>
    )
}
 
    
    