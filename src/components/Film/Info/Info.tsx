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

    const firstHalf = Object.entries(rest).slice(0, 4)
    const secondHalf = Object.entries(rest).slice(4)

    const ActiveText: FC = ({ children }) => 
        <Text
            uppercase
            size='12px'
            weight='600'
            color='silver'
            style={{ margin: 10 }}
        >
            {children}
        </Text>

    return (
        <div style={{ margin: '50px 0'}}>
            <Container justify='flex-start'>
                <Title>Info</Title>
            </Container>
            <Container h='70%' p='40px 0'>
                <Container 
                    direction='column' 
                    h='300px' 
                    justify='space-between'
                >
                    {
                        firstHalf.map((item, index) => 
                            <Container key={index} direction='column'>
                                <ActiveText>{Object.values(item[0])}</ActiveText>
                                <Text color={text.silver}>
                                    {Object.values(item[1])}
                                </Text>
                            </Container>
                        )
                    }
                </Container>
                <Container 
                    direction='column' 
                    h='300px' 
                    justify='space-between'
                >
                    {
                        secondHalf.map((item, index) => 
                            <Container key={index} direction='column'>
                                <ActiveText>{Object.values(item[0])}</ActiveText>
                                <Text color={text.silver}>{Object.values(item[1])}</Text>
                            </Container>
                        )
                    }
                </Container>
            </Container>  
        </div>
    )
}

    