import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import { Home } from '../pages/Home'
import { Library } from '../pages/Library'
import { Browse } from '../pages/Browse'

import { Film } from '../pages/Film/Film'
import { FilmWatch } from '../pages/Film/FilmWatch'

import { NavBar } from '../components/navigation/Nav.bar'
import { Search } from '../pages/Search'

import { SignIn } from '../pages/Auth/SignIn'
import { SignUp } from '../pages/Auth/SignUp'

import { WatchLater } from '../pages/library/WatchLater'


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <NavBar />,
        main: () => <Home />
    },
    {
        path: '/browse',
        sidebar: () => <NavBar />,
        main: () => <Browse />
    },
    {
        path: '/search',
        sidebar: () => <NavBar />,
        main: () => <Search />
    },
    {
        path: '/film/:id',
        sidebar: () => null,
        main: ({ match, history, location }) => <Film match={match} history={history} location={location} />
    },
    {
        path: '/watch/:id',
        sidebar: () => null,
        main: () => <FilmWatch />,

    },
    {
        path: '/library/watchlater',
        sidebar: () => <NavBar />,
        main: () => <WatchLater />
    }
]

export const useRoutes = (history: History, isAuth: boolean) => {
    if(isAuth) {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map((route, index) => 
                        <Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
                    )}
                </Switch>
                <Switch>
                    {routes.map((route, index) => 
                        <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                    )}
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

                {/* <Redirect to='/' /> */}
            </Switch>
        </ConnectedRouter>
    )
}
 
    
    