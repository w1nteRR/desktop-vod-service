import React, { FC, useState, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'

import { Container } from '../../shared/utils/layout'

import { ModalBg } from '../../shared/styled/modals/Modal.styled'
import { ModalHeader } from '../../shared/styled/modals/Modal.shared'
import { Input } from '../../shared/styled/inputs/inputs.shared'
import { ButtonText } from '../../shared/styled/buttons/Buttons.shared'

import { text } from '../../shared/utils/colors'

import { useUser } from '../../../hooks/user/useUser'
import { RootState } from '../../../redux/rootReducer'


export const UsernameChangeModal: FC = () => {
    
    const [inputVal, setInputVal] = useState('')

    const activeModal = useSelector((state: RootState) => state.app.modal.active)

    const { changeUsername } = useUser()

    return (
        <>
        {
            activeModal === 'changeUsername' 
            &&
            <ModalBg>
                <ModalHeader title='Change username' />
                <Container 
                    direction='column' 
                    w='50%' 
                    m='2% auto' 
                    h='50vh'            
                >
                    <Input 
                        p='30px'
                        placeholder='Enter username' 
                        type='string'
                        change={(event: ChangeEvent<HTMLInputElement>) => setInputVal(event.target.value)}
                    />
                    <Container justify='flex-end' m='20px'>
                        <ButtonText 
                            bgColor={text.blue} 
                            text='Update'
                            w='130px'
                            h='45px'
                            textColor={text.dark}
                            onClick={() => changeUsername(inputVal)} 
                        />
                    </Container>
                </Container>
            </ModalBg>
        }
        </>
    )
}