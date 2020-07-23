import React, { FC } from 'react'
import { ButtonWatch, ButtonWl } from '../../shared/styled/buttons/Buttons.shared'
import { Container } from '../../shared/utils/layout'

export const Control: FC = () => {
    return (
        <Container p='20px 0' justify='space-between'>
            <ButtonWatch 
                onClick={() => console.log('Watch')} 
            />
            <ButtonWl 
                isWatchLater={false} 
                onClick={() => console.log('wl')} 
            />
        </Container>
    )
}