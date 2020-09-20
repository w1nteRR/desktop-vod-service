import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'

import { Input } from '../../components/shared/styled/inputs/inputs.shared'
import { Container } from '../../components/shared/utils/layout'
import { ButtonText } from '../../components/shared/styled/buttons/Buttons.shared'
import { TextT } from '../../components/shared/utils/typography'
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
    const history = useHistory()

    const _inputHandler = (event: ChangeEvent<HTMLInputElement>) => setForm({...form, [event.target.name]: event.target.value})

    const _submit = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        if(form.password != form.confirmPassword) return console.log('wrogn')
         
        dispatch(signUp(form))
    }

    if(isSignUp) return <Redirect to='/signin' />

    return <>
            <Container 
                direction='column' 
                h='90vh'
                justify='space-around'
                w='500px'
                m='0 auto'
            >
                <Container justify='flex-start' w='90%'>
                    <TextT>Sign Up</TextT>
                </Container>
                    <form style={{ height: '50%', width: '100%' }}>
                        <Container direction='column' h='100%' justify='space-between'>
                            {
                                inputs.map((input, index) => 
                                    <Input
                                        key={index} 
                                        w='60%' 
                                        p='20px'
                                        type={input.type} 
                                        name={input.name}
                                        placeholder={input.placeholder || input.name}
                                        change={_inputHandler}
                                    />
                                )
                            }
                        </Container>
                    </form>
                <Container h='10%' justify='space-around' w='60%'>
                    <ButtonText 
                        text='Sign Up' 
                        w='100%' 
                        bgColor={text.blue} 
                        h='40px' 
                        onClick={_submit} 
                    />
                </Container>
            </Container>
        </> 
}
   

const inputs = [
    {  
        name: 'email',
        type: 'email',
    },
    {  
        name: 'username',
        type: 'text',
    },
    {  
        name: 'password',
        type: 'password',
    },
    {  
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'confirm password'
    }
]