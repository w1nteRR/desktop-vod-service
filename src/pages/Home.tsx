import React, { FC } from 'react'

import { PageLayout } from '../components/shared/utils/layout'
import { FilmCarousel } from '../components/Carousels/Films.carousel'

export const Home: FC = () => {
    return (
        <PageLayout>
            <FilmCarousel />
            <FilmCarousel />
            <FilmCarousel />
            <FilmCarousel />
            <FilmCarousel />
            <FilmCarousel />
            <FilmCarousel />
        </PageLayout>
    )
}