import React, { FC } from 'react'
import { ButtonWatch, ButtonWl, ButtonPl, ButtonFav } from '../../shared/styled/buttons/Buttons.shared'
import { Container } from '../../shared/utils/layout'

interface ControlProps {
    type: string
}

export const Control: FC<ControlProps> = ({ type }) => {
    return (
        <Container p='20px 0' justify='space-between'>
            <ButtonWatch 
                onClick={() => console.log('Watch')} 
            />
            <Container justify='flex-end'>
                {
                    type === 'Serial'
                    &&
                    <ButtonFav
                        isFav={false} 
                        onClick={() => console.log('fav')}
                    />
                }
                <ButtonPl 
                    onClick={() => console.log('pl')} 
                />
                <ButtonWl 
                    isWatchLater={false} 
                    onClick={() => console.log('wl')} 
                />
            </Container>
        </Container>
    )
}