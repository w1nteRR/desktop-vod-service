import React, { FC } from 'react'

import { DualRing } from '../../shared/styled/loaders/DualRing'

import { text } from '../../shared/utils/colors'
import { Text, Title } from '../../shared/utils/typography'
import { Container } from '../../shared/utils/layout'

import { IOMDBRating } from '../../../interfaces/rating/IRating'

import { useAxios } from '../../../hooks/useAxios'


export const Rating: FC<{ name: string }> = ({
    name
}) => {

    const { res, loading } = useAxios(`/api/omdb/rating/${name}`, {
        method: 'GET'
    })

    if(loading) return <DualRing />

    const rating: Array<IOMDBRating> = res?.data

    const colorPicker = (index: number) => {
        switch(index) {
            case 0:
                return 'orange'
            case 1:
                return text.red
            case 2:
                return 'green'
        }
    } 

    return <Container 
                bgColor={text.dark} 
                brRadius='5px' 
                direction='column' 
                p='10px' 
            >
            <Container justify='flex-start'>
                <Title>Rating</Title>
            </Container>
            <Container direction='column'>
                {
                    rating.map((item, index) => 
                        <Container key={index} justify='space-between'>
                            <Text 
                                uppercase
                                size='9px'
                                weight='600'
                                color={colorPicker(index)}
                                style={{ margin: 10 }}
                            >
                                {item.Source}
                            </Text>
                            <Text 
                                size='10px'
                                weight='900'
                                color='gray'
                                style={{ margin: 10 }}
                            >
                                {item.Value}
                            </Text>
                        </Container>
                    )
                }
            </Container>
    </Container>
}