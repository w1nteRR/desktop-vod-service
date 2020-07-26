import styled from 'styled-components'

export const CheckBoxTagS = styled.div`
    margin: 20px;

        
    > label {
        cursor: pointer;
    }

    > label:hover {
        color: #fff;
    }
    
    > label span {
        padding: 10px;
    }

    > label input {
        display: none;
    }

    > label input:checked + span {
        font-weight: 700;
        padding: 10px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    }
`