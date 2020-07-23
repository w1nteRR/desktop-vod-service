import React, { FC } from 'react'

import { WallpaperStyled } from './Wallpaper.styled'
import { Container } from '../../shared/utils/layout'

interface WallpaperProps {
    wallpaper: string
}

export const Wallpaper: FC<WallpaperProps> = ({ wallpaper }) => {
   
    return (
        <Container h='500px'>
            <WallpaperStyled wallpaper={wallpaper} />
        </Container>
    )
}