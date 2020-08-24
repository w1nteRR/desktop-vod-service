import React, { FC, useState } from 'react'
import { useHistory } from 'react-router'

import { Container, Backdrop } from '../../shared/utils/layout'
import { Text } from '../../shared/utils/typography'
import { ButtonMute, ButtonFullScreen, ButtonBack } from '../../shared/styled/buttons/Buttons.shared'

import { Control } from '../Control/Control'

interface InfoProps {
    name: string,
    describe: string,
    _id: string,
    type: string,
    wallpaper: string
}

const title = (name: string) =>
    <Text
        size='50px'
        weight='100'
        color='#fff'
    >
        {name}
    </Text>

export const Intro: FC<InfoProps> = ({ name, describe, _id, type, wallpaper }) => {

    const [isMuted, setMute] = useState(true)
    const [isVisible, setVisibility] = useState(true)

    const history = useHistory()

    const _volSwith = () => setMute(prev => !prev) 
    const _visibilitySwitch = () => setVisibility(prev => !prev)

    return (
        <>
        <Container
            h='100vh'

            justify='space-around'
            align='flex-start'
            direction='column'

            m='0 0 7%'
        >
            <video
                poster={wallpaper}
                autoPlay
                muted={isMuted}
                src={`/static/${_id}.mp4`}
                style={{
                    objectFit: 'cover',
                    height: '100vh',
                    width: '100%'
                }}
            />
            <Container
                h='100vh'
                style={{ position: 'absolute', top: 0 }}
                direction='column'
            >
                {
                    isVisible
                    ?   <Backdrop>
                            <Container
                                w='50%'
                                direction='column'
                                h='100%'
                                justify='space-around'
                                p='0 40px'
                            >
                                <Container justify='flex-start'>
                                    <ButtonBack onClick={() => history.goBack()} />
                                </Container>
                                <Container justify='flex-start'>
                                    {title(name)}
                                </Container>
                                <Text
                                    style={{
                                        lineHeight: 2
                                    }}
                                    weight='100'
                                    spacing='1.1px'
                                    color='silver'
                                    size='10px'
                                >
                                    {describe}
                                </Text>
                                    <Control type={type} _id={_id} />
                            </Container>
                        </Backdrop>
                    :   null
                }
                <Container style={{ position: 'absolute', bottom: 0 }} justify='flex-end'>
                    <ButtonMute onClick={_volSwith} />
                    <ButtonFullScreen onClick={_visibilitySwitch} />
                 </Container>
            </Container>
        </Container>
        </>
    )
}
