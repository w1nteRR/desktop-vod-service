import styled from 'styled-components'

interface Text {
    size?: string,
    weight?: string,
    uppercase?: Boolean,
    color?: string,
    spacing?: string
}

export const Title = styled.h1`
    font-size: 14px;
    font-family: Roboto, Arial;
    font-weight: 300;
`

export const Text = styled.span<Text>`
    font-size: ${props => props.size || '12px'};
    font-weight: ${props => props.weight || '400'};
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
    color: ${props => props.color || "silver"};
    letter-spacing: ${props => props.spacing || '0'};
    font-family: Roboto, Arial;
`