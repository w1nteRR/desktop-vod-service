import React, { FC } from 'react'

import { Playlists } from '../components/Home/Playlists'
import { Trends } from '../components/Home/Trends'

import { PageLayout } from '../components/shared/utils/layout'

export const Home: FC = () =>      
    <PageLayout>   
        <Trends />   
        <Playlists />
    </PageLayout>