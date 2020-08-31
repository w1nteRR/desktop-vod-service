import styled from 'styled-components'
import { layout, text } from './colors'

interface IContainerProps {
    w?: string,
    h?: string,
    minH?: string,
    maxH?: string,
    align?: string,
    justify?: string,
    direction?: string,
    wrap?: string,
    m?: string,
    p?: string,
    bgColor?: string,
    shadow?: boolean
}

interface IBgWallpaper {
    src: string
}

export const Container = styled.div<IContainerProps>`
    width: ${props => props.w || '100%'};
    height: ${props => props.h || 'auto'};
    min-height: ${props => props.minH || 'auto'};
    max-height: ${props => props.maxH || 'auto'};

    display: flex;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${props => props.direction || 'row'};
    flex-wrap: ${props => props.wrap ? 'wrap' : null};
    
    margin: ${props => props.m || '0'};
    padding: ${props => props.p || '0'};
    background-color: ${props => props.bgColor || ''};

    box-shadow: ${props => props.shadow ? '0px 0px 3px rgba(0, 0, 0, 0.5)' : null };
`

export const Background = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${text.dark};
`

export const PageLayout = styled.div`
    width: 80%;
    position: absolute;
    right: 0;
    
    background: linear-gradient(180deg, rgba(13, 16, 19, 0.92) 0%, rgba(22, 28, 33, 0.91) 76.38%);
    padding-bottom: 10px;
`

export const FilmPageLayout = styled(PageLayout)`
    position: static;
    margin: 0 auto;
    background: transparent;
`

export const BgWallpaper = styled.div<IBgWallpaper>`
    width: 100%;
    min-height: 100vh;
    
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
`

export const Backdrop = styled.div`
    width: 100%;
    height: inherit;
    
    background: linear-gradient(89.89deg, rgba(0, 0, 0, 0.81) 16.99%, rgba(0, 0, 0, 0.52) 72.47%, rgba(0, 0, 0, 0.24) 99.89%);
`