import React, { FC } from 'react'

import { Container } from '../../shared/utils/layout'
import { Text, Title } from '../../shared/utils/typography'
import { text } from '../../shared/utils/colors'


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
        <Container bgColor={text.dark} brRadius='5px' direction='column' p='10px' m='20px 0'>
            <Container justify='flex-start'>
                <Title>Info</Title>
            </Container>
            <Container h='70%' p='40px 0'  direction='column'>
                {
                    Object.entries(rest).map(item =>  
                        <Container justify='space-between'>
                            <ActiveText>{Object.values(item[0])}</ActiveText>
                            <Text size='9px' color='gray' weight='900'>{Object.values(item[1] + '')}</Text>
                        </Container>
                    )
                }
            </Container>  
        </Container>
    )
}
