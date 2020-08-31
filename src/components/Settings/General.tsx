import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'
import { Select } from '../shared/styled/select/Select'

export const General: FC = () => {

    const languages = [
        'English',
        'Russian',
        'Ukrainian'
    ]

    return (
        <Container shadow minH='20vh'>
            <Container justify='space-around'>
                <Text uppercase size='10px' weight='600'>Language</Text>
                <Select options={languages} active={languages[0]} />
            </Container>
        </Container>
    )
}