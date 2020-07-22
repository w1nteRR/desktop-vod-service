import React, { FC } from 'react'

import { Container } from '../components/shared/utils/layout'

export const Library: FC = () => {
    return (
        <Container 
            bgColor='#343131' 
            w='80%'
            m='0 auto'
            h='90vh'
        >
            <p>Lib</p>
        </Container>
    )
}