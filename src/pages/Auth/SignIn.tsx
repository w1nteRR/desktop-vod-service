import React, { FC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { Input } from '../../components/shared/styled/inputs/inputs.shared'
import { PageLayout, Container } from '../../components/shared/utils/layout'
import { ButtonText } from '../../components/shared/styled/buttons/Buttons.shared'
import { text } from '../../components/shared/utils/colors'

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
        <PageLayout>
            <form>
                <Container 
                    direction='column' 
                    m='5% 0'
                    h='90vh'
                    justify='space-around'
                >
                    <Input 
                        type='email'
                        name='email'
                        change={_inputHandler}
                        w='50%' 
                        placeholder='Email'
                        p='3%'
                    />
                    <Input 
                        type='password'
                        name='password'
                        change={_inputHandler}
                        w='50%' 
                        placeholder='Password'
                        p='3%'
                    />
                    <Container justify='space-around'>
                        <ButtonText
                            text='Sign Up'
                            onClick={() => history.push('/signup')}
                        />
                        <ButtonText 
                            text='Sign In' 
                            bgColor={text.blue}
                            h='45px'
                            w='125px'
                            textColor={text.dark}
                            onClick={() => dispatch(signIn(form))} 
                        />   
                    </Container>
                </Container>
            </form>
        </PageLayout>
        
    )
}