import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../../pages/Home'
import { Library } from '../../pages/Library'
import { Browse } from '../../pages/Browse'

import { NavBar } from '../../components/navigation/Nav.bar'

export const MainStack: FC = () => 
    <>
        <NavBar />
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/browse' component={Browse} />
            <Route path='/library' component={Library} />
        </Switch>
    </>