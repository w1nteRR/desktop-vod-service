import React, { FC } from 'react'
import { useHistory } from 'react-router'

import { ButtonWatch } from '../../shared/styled/buttons/Buttons.shared'

import { text } from '../../shared/utils/colors'
import { Container } from '../../shared/utils/layout'
import { Describe, Text, TextT, Title } from '../../shared/utils/typography'

import { Control } from '../Control/Control'

import { useAuth } from '../../../hooks/auth/useAuth'

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
}) => {

    const { token, loading } = useAuth()

    const history = useHistory()

    if(loading) return <></>

    return (
        <Container bgColor={text.dark} p='10px 0' m='5% 0' direction='column' style={{ borderRadius: 5 }}>
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
            <Container w='90%' justify='space-between'>
                <ButtonWatch
                    onClick={() => history.push(`/watch/${_id}`)}
                    iconColor='#fff'
                />
                {
                    token && <Control _id={_id} token={token} />
                }
            </Container>
        </Container>
    )
}