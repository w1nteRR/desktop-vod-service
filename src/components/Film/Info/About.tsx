import React, { FC } from 'react'

import { text } from '../../shared/utils/colors'
import { Container } from '../../shared/utils/layout'
import { Describe, Text, Title } from '../../shared/utils/typography'

import { Control } from '../Control/Control'

interface IAboutProps {
    name: string
    genr: Array<string>
    year: number
    duration: string
    describe: string
    _id: string
}


export const About: FC<IAboutProps> = ({ 
    name, 
    genr, 
    year, 
    duration, 
    describe,
    _id 
}) => 
    <Container bgColor={text.dark} p='20px 0' m='5% 0' direction='column' style={{ borderRadius: 5 }}>
        <Container justify='flex-start' w='90%'>
            <Title color='silver'>{name}</Title>
        </Container>
        <Container m='20px' w='90%' justify='flex-start'>
            <Describe>{describe}</Describe>
        </Container>
        <Container justify='flex-start' w='90%' m='25px 0'>
            {
                genr.map((i, index) => 
                    <Text 
                        key={index} 
                        color='gray' 
                        size='9px' 
                        uppercase 
                        weight='900'
                        m='0 10px 0 0'
                    >
                        {i}
                    </Text>
                )
            }
            <Text color='gray' size='9px' m='0 10px 0 0' uppercase weight='900'>{duration}</Text>
            <Text color='gray' size='9px' m='0 10px 0 0' uppercase weight='900'>{year}</Text>
        </Container>
        <Container w='90%'>
            <Control _id={_id} />
        </Container>
    </Container>