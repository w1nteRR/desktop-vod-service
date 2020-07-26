import styled from 'styled-components'

import { text } from '../../utils/colors'

interface ButtonStyled {
    w?: string,
    h?: string,
    bgColor?:string,
    shadow?: boolean
}


export const Button = styled.button<ButtonStyled>`
    width: ${props => props.w || 'auto'};
    height: ${props => props.h || '35px'};
    
    background-color: ${props => props.bgColor || 'transparent'};

    outline: none;
    border: none;

    cursor: pointer;
`

export const WatchS = styled(Button)`
    width: 200px;
    height: 45px;

    margin: 10px;
    
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        transition: box-shadow 1s ease;
    }
`

export const BackS = styled(Button)`
    width: 30px;
    height: 30px;

    border-radius: 50%;
    
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${text.silver};
        transition: .5s background-color ease;
    }
`

export const WatchLaterS = styled(Button)`
    width: 45px;
    height: 45px;

    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 1px solid ${text.dark};
`

export const ButtonTextS = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px;
    
    box-shadow: ${props => props.shadow ? '0px 0px 6px rgba(0, 0, 0, 0.25)' : null };
`






