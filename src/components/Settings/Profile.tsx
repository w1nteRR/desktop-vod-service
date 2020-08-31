import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { Container } from '../shared/utils/layout'
import { UserAvatar } from '../shared/styled/profile/User.avatar'
import { Title } from '../shared/utils/typography'
import { ButtonText } from '../shared/styled/buttons/Buttons.shared'
import { text } from '../shared/utils/colors'

import { UsernameChangeModal } from './modal/UsernameChange.modal'

import { openModal } from '../../redux/app/actions'

import { useAxios } from '../../hooks/useAxios'
import { IUser } from '../../interfaces/auth/Auth'
import { DualRing } from '../shared/styled/loaders/DualRing'

export const Profile: FC = () => {

    const sub = true

    const { res, loading } = useAxios('/api/user/me', {
        method: 'POST',
        data: {
            token: localStorage.getItem('token')
        }
    })

    const dispatch = useDispatch()

    if(loading) return (
        <Container>
            <DualRing />
        </Container>
    )

    const user: IUser = res?.data

    return (
        <>
        <Container justify='space-around'>
            <UserAvatar isAuth={true} />
            <Title 
                color={text.silver}
                onClick={() => dispatch(openModal(UsernameChangeModal, 'changeUsername'))}
            >
                {user.username}
            </Title>
            <ButtonText 
                onClick={() => console.log('s')}
                text={sub ? 'Subscriber' : 'Subscribe'}
                w='140px'
                h='50px'
                bgColor={sub ? '' : text.blue}
                textColor={sub ? text.dark : text.dark}
            />
        </Container>
        </>
    )
}