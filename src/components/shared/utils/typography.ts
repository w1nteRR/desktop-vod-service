import styled from 'styled-components'
import { text } from './colors'

interface Text {
    size?: string,
    weight?: string,
    uppercase?: Boolean,
    color?: string,
    spacing?: string,
    m?: string
}

interface Title {
    color?: string
}

export const Title = styled.h1<Title>`
    font-size: 23px;
    font-family: Roboto, Arial;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${props => props.color || text.silver};
`

export const Text = styled.span<Text>`
    font-size: ${props => props.size || '12px'};
    font-weight: ${props => props.weight || '400'};
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
    color: ${props => props.color || "silver"};
    letter-spacing: ${props => props.spacing || '0'};
    font-family: Roboto, Arial;
    margin: ${props => props.m || '0'};
`

export const TextT = styled.span`
    text-transform: uppercase;
    color: gray;
    font-size: 13px;
    letter-spacing: 1.2px;
    font-family: Roboto, Arial;
`