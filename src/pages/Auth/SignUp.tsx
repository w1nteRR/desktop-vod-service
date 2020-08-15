import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { Input } from '../../components/shared/styled/inputs/inputs.shared'
import { PageLayout, Container } from '../../components/shared/utils/layout'
import { ButtonText } from '../../components/shared/styled/buttons/Buttons.shared'
import { text } from '../../components/shared/utils/colors'

import { signUp } from '../../redux/auth/actions'
import { RootState } from '../../redux/rootReducer'

export const SignUp: FC = () => {

    const [form, setForm] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const dispatch = useDispatch()
    const isSignUp = useSelector((state: RootState) => state.auth.signUpStatus)

    const _inputHandler = (event: ChangeEvent<HTMLInputElement>) => setForm({...form, [event.target.name]: event.target.value})

    const _submit = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        if(form.password != form.confirmPassword) return console.log('wrogn')
         
        dispatch(signUp(form))
    }

    if(isSignUp) return <Redirect to='/signin' />

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
                        type='text'
                        name='username'
                        change={_inputHandler}
                        w='50%' 
                        placeholder='Username'
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
                    <Input 
                        type='password'
                        name='confirmPassword'
                        change={_inputHandler}
                        w='50%' 
                        placeholder='Confirm password'
                        p='3%'
                    />
                    <Container w='55%' justify='flex-end'>
                        <ButtonText 
                            text='Sign Up' 
                            bgColor={text.blue}
                            h='45px'
                            w='125px'
                            textColor={text.dark}
                            onClick={_submit} 
                        />   
                    </Container>
                </Container>
            </form>
        </PageLayout>
        
    )
}