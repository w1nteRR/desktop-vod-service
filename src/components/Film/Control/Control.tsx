import React, { FC } from 'react'
import { ButtonWatch, ButtonWl, ButtonPl, ButtonFav } from '../../shared/styled/buttons/Buttons.shared'
import { Container } from '../../shared/utils/layout'
import { text } from '../../shared/utils/colors'

interface ControlProps {
    type: string
}

export const Control: FC<ControlProps> = ({ type }) => {
    return (
        <Container 
            p='20px 0' 
            justify='flex-start'
            m='0 10% 10%' 
            w='90%'
        >
            <ButtonWatch 
                onClick={() => console.log('Watch')} 
                iconColor={text.red}
            />
            <ButtonWl 
                isWatchLater={false} 
                onClick={() => console.log('wl')} 
            />
        </Container>
    )
}