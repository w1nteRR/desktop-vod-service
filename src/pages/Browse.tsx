import React, { FC } from 'react'

import { Container } from '../components/shared/utils/layout'

export const Browse: FC = () => {
    return (
        <Container 
            bgColor='#343131' 
            w='80%'
            m='0 auto'
            h='220vh'
            style={{
                overflowY: 'hidden'
            }}
        >
            <p>Browse</p>
        </Container>
    )
}