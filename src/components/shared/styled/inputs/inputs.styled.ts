import styled from 'styled-components'

import { text } from '../../utils/colors'

interface IInputStyled {
    w?: string,
    h?: string,
    p?: string,
    shadow?: boolean
}

export const InputS = styled.input<IInputStyled>`
    width: ${props => props.w || '100%'};

    padding: ${props => props.p || '10px'};

    box-shadow: ${props => props.shadow ? '0px 0px 10px rgba(0, 0, 0, 0.5)' : null };

    background: ${text.dark};

    border-radius: 10px;

    outline: none;
    border: none;

    color: gray;
    font-size: 12px;

    ::placeholder {
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 700;
    }
`