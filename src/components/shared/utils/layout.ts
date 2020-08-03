import styled from 'styled-components'
import { layout } from './colors'

interface ContainerProps {
    w?: string,
    h?: string,
    minH?: string,
    maxH?: string,
    align?: string,
    justify?: string,
    direction?: string,
    wrap?: Boolean,
    m?: string,
    p?: string,
    bgColor?: string,
}

export const Container = styled.div<ContainerProps>`
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
`

export const Background = styled.div`
    width: 100%;
    background: ${layout.mainBg};
`

export const PageLayout = styled.div`
    width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    
    background: rgba(255, 255, 255, 0.3);
    padding-bottom: 10px;
`