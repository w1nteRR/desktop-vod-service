import React, { FC } from 'react'

import { Container } from '../../shared/utils/layout'
import { Title, Text } from '../../shared/utils/typography'

interface ISeasonsProps {
    seasons: Array<number>
    onSeasonClick: (n: number) => void
}

export const Seasons: FC<ISeasonsProps> = ({ seasons, onSeasonClick }) => {
    return (
        <Container justify='space-between'>
            <Container p='0 20px' justify='flex-start'>
                <Title>Series</Title>
            </Container>
        <Container justify='flex-end' w='90%' p='10px'>
            {
                seasons.map(num => 
                    <Text 
                        key={num} 
                        uppercase
                        color='silver'
                        style={{ marginLeft: 20, cursor: 'pointer' }}
                        onClick={() => onSeasonClick(num)}
                    >
                        Season {num}
                    </Text>
                )
            }
        </Container>
    </Container>
    )
}