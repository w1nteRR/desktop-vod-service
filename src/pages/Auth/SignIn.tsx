import React, { FC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { Input } from '../../components/shared/styled/inputs/inputs.shared'
import { Container } from '../../components/shared/utils/layout'
import { ButtonText } from '../../components/shared/styled/buttons/Buttons.shared'
import { text } from '../../components/shared/utils/colors'

import { TextT } from '../../components/shared/utils/typography'

import { signIn } from '../../redux/auth/actions'


export const SignIn: FC = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const _inputHandler = (event: ChangeEvent<HTMLInputElement>) => setForm({...form, [event.target.name]: event.target.value})

    return (
            <>
                <Container 
                    direction='column' 
                    w='500px'
                    h='90vh'
                    justify='space-around'
                    m='0 auto'
                >
                    <Container justify='flex-start' w='90%'>
                        <TextT>Sign In</TextT>
                    </Container>
                        <form style={{ height: '50%', width: '100%' }}>
                            <Container direction='column' h='100%' justify='space-around'>
                                <Input 
                                    w='60%' 
                                    type='email' 
                                    name='email' 
                                    p='20px' 
                                    placeholder='Email' 
                                    change={_inputHandler}
                                />
                                <Input 
                                    w='60%' 
                                    type='password' 
                                    name='password'
                                    p='20px' 
                                    placeholder='Password' 
                                    change={_inputHandler}
                                />
                            </Container>
                        </form>
                    <Container h='20%' justify='space-around' w='90%'>
                        <ButtonText 
                            text='Sign Up' 
                            w='20%' 
                            h='50px'
                            onClick={() => history.push('/signup')} 
                        />
                        <ButtonText 
                            text='Sign In' 
                            w='30%' 
                            bgColor={text.blue} 
                            h='40px' 
                            onClick={() => dispatch(signIn(form))} 
                        />
                    </Container>
                </Container>
            </>        
    )
}