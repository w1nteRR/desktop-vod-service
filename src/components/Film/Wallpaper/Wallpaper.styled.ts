import styled from 'styled-components'

interface Props {
    wallpaper: string
}

export const WallpaperStyled = styled.div<Props>`
    background-image: url(${props => props.wallpaper});
    background-repeat: no-repeat;
    background-size: cover;
    
    box-shadow: inset 0px -200px 100px rgba(0, 0, 0, 0.6);

    height: 100%;
    width: 100%;
`