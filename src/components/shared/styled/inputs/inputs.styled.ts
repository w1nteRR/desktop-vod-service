import styled from 'styled-components'

interface IInputStyled {
    w?: string,
    h?: string,
    p?: string,
    shadow?: boolean
}

export const Input = styled.input<IInputStyled>`
    width: ${props => props.w || '100%'};
    height: ${props => props.h || '75px'};

    padding: ${props => props.p || '10px'};

    box-shadow: ${props => props.shadow ? '0px 0px 6px rgba(0, 0, 0, 0.25)' : null };

    background: transparent;

    outline: none;
    border: none;
`