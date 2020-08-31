import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'

import { Select } from '../shared/styled/select/Select'

export const Playback: FC = () => {
    
    const languages = [
        'English',
        'Ukrainian',
        'Russian'
    ]

    return (
        <Container shadow minH='20vh'>
            <Container justify='space-around'>
                <Text uppercase size='10px' weight='600'>Captions</Text>
                <Select options={languages} active={languages[0]} />
            </Container>
        </Container>
    )
}