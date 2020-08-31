import React, { useState, FC } from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiMenuDown } from '@mdi/js'

import { Container } from '../../utils/layout'
import { Text } from '../../utils/typography'
import { text } from '../../utils/colors'

interface ISelectProps {
    options: Array<any>
    active: number | string | null
}

const SelectDash = styled.div`
    position: relative;
    background-color: #fff;
    width: 100px;
`

export const Select: FC<ISelectProps> = ({ options, active }) => {
    
    const [toggle, setToggle] = useState(false)
    const [activeItem, setActiveItem] = useState(active)
    
    const _toggle = () => setToggle(prev => !prev)

    return (
        <>
        <Container h='50px' w='100px' onClick={_toggle} >
            { 
                !toggle 
                &&
                <Container justify='space-around' style={{cursor: 'pointer'}}>
                    <Text uppercase>{activeItem}</Text>
                    <Icon 
                        path={mdiMenuDown}
                        size={.8}
                        color='#fff'
                    />
                </Container>  
            }
            {
                toggle 
                && 
                <SelectDash>
                    <Container direction='column' bgColor={text.dark}>
                        {
                            options.map(item => 
                                <Container p='20px' style={{ cursor: 'pointer' }}>
                                    <Text onClick={() => setActiveItem(item)} uppercase>{item}</Text>
                                </Container>
                            )
                        }
                    </Container>
                </SelectDash>
            }
        </Container>
        </>
    )
}