import React, { FC } from 'react'

import { Container } from '../shared/utils/layout'
import { Text } from '../shared/utils/typography'
import { text } from '../shared/utils/colors'

interface ISettingsContainerProps {
    title: string
}

export const SettingsContainer: FC<ISettingsContainerProps> = ({ children, title }) =>
    <Container direction='column' w='60%' m='5%'>
        <Container justify='flex-start' p='10px'>
            <Text color={text.silver} uppercase>{title}</Text>
        </Container>
        {children}
    </Container>
    