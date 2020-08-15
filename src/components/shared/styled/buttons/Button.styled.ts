import styled from 'styled-components'

import { text } from '../../utils/colors'

interface ButtonStyled {
    w?: string,
    h?: string,
    bgColor?: string,
    shadow?: boolean,
    brdrColor?: string
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
    width: 250px;
    height: 50px;


    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

    background-color: rgba(255, 255, 255, 0.1);

    backdrop-filter: blur(1px);

    display: flex;
    align-items: center;
    justify-content: space-around;


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
    width: 65px;
    height: 50px;

    background-color: rgba(255, 255, 255, 0.1);

    backdrop-filter: blur(1px);

    margin: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    /* border: 1px solid ${text.dark}; */
`

export const ButtonTextS = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 5px;

    background-color: ${props => props.bgColor || 'transparent'};
    
    border-color: ${props => props.brdrColor || 'none'};
    border-width: ${props => props.brdrColor ? '1px' : null};
    border-style: ${props => props.brdrColor ? 'solid' : null};
    
    box-shadow: ${props => props.shadow ? '0px 0px 6px rgba(0, 0, 0, 0.25)' : null };
`






