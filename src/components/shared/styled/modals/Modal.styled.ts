import styled from 'styled-components'


interface IModalStyled {

}

export const ModalBg = styled.div`
    width: 100%;
    height: 100vh;
    
    position: fixed;

    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(5px);

    z-index: 1;

    top: 0;
`

export const ModalTags = styled.div`
    height: 600px;  
    
    overflow-y: scroll;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;


    &::-webkit-scrollbar {
        width: 1px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: silver;
    }
    
`