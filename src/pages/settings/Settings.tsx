import React, { FC } from 'react'

import { PageLayout, Container } from '../../components/shared/utils/layout'
import { Header } from '../../components/navigation/Header'

import { Profile } from '../../components/Settings/Profile'
import { General } from '../../components/Settings/General'

import { UsernameChangeModal } from '../../components/Settings/modal/UsernameChange.modal'
import { SettingsContainer } from '../../components/Settings/Settings.container'

export const Settings: FC = () => {


    return (
        <>
        <PageLayout>
            <Header />
            <Container minH='100vh' direction='column' justify='flex-start'>
                <Profile />
                <SettingsContainer title='General'>
                    <General />
                </SettingsContainer>
                {/* <SettingsContainer title='Playback'>
                    <General />
                </SettingsContainer> */}
            </Container>
        </PageLayout>
        <UsernameChangeModal />
        </>
    )
}