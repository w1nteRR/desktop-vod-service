import React, { FC } from 'react'

import { Container } from '../../shared/utils/layout'
import { Text } from '../../shared/utils/typography'

interface ISeasonsProps {
    seasons: Array<number>
    onSeasonClick: (n: number) => void
}

export const Seasons: FC<ISeasonsProps> = ({ 
    seasons, 
    onSeasonClick 
}) => 
    <Container justify='flex-end' w='95%' m='0 auto'>
        {
            seasons.map(num => 
                <Text 
                    key={num} 
                    uppercase
                    size='9px'
                    weight='900'
                    color='silver'
                    style={{ marginLeft: 20, cursor: 'pointer' }}
                    onClick={() => onSeasonClick(num)}
                >
                    Season {num}
                </Text>
            )
        }
    </Container>