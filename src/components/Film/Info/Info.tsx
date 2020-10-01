import React, { FC } from 'react'

import { Container } from '../../shared/utils/layout'
import { Text } from '../../shared/utils/typography'
import { FilmLayoutCard } from '../../shared/styled/cards/Cards.shared'


interface InfoProps {
    audio: Array<string>,
    company: string,
    country: string,
    director: string,
    genr: Array<string>,
    release: string,
    subtitles: Array<string>,
    year: string
}


export const Info: FC<InfoProps> = ({ ...rest }) => {   
    
    const ActiveText: FC = ({ children }) => 
        <Text
            uppercase
            size='9px'
            weight='600'
            color='silver'
            style={{ margin: 10 }}
        >
            {children}
        </Text>

    return (
        <FilmLayoutCard title='info'>
            <Container h='70%' p='20px 0'  direction='column'>
                {
                    Object.entries(rest).map((item, index) =>  
                        <Container justify='space-between' key={index}>
                            <ActiveText>{Object.values(item[0])}</ActiveText>
                            <Text size='9px' color='gray' weight='900' m='10px'>{Object.values(item[1] + '')}</Text>
                        </Container>
                    )
                }
            </Container>
        </FilmLayoutCard>
    )
}
