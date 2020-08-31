import React, { FC, RefObject } from 'react'
import Icon from '@mdi/react'
import { 
    mdiMovie, 
    mdiAccountMultiple, 
    mdiInformation,
    mdiApproximatelyEqualBox,
    mdiFilmstripBoxMultiple 
} from '@mdi/js'

import { Container } from '../shared/utils/layout'

interface ScrollNavProps {
    refs: Array<RefObject<HTMLDivElement>>,
    isSerial: boolean
}

export const ScrollNav: FC<ScrollNavProps> = ({ refs, isSerial }) => {
    
    const _scroll = (ref: HTMLDivElement) => ref.scrollIntoView({ behavior: 'smooth' })   

    return (
        <Container 
            direction='column' 
            h='300px' 
            w='50px'
            justify='space-around'

            style={{
                position: 'fixed',
                right: 0,
                top: '30%',
            }}
        >
            <Icon 
                path={mdiMovie}
                size={.6}
                color='#fff'
                onClick={() => _scroll(refs[0].current!)}
                style={{
                    cursor: 'pointer'
                }}
            />
            {
                isSerial
                &&
                <Icon 
                    path={mdiFilmstripBoxMultiple}
                    size={.6}
                    color='#fff'
                    onClick={() => _scroll(refs[1].current!)}
                    style={{
                        cursor: 'pointer'
                    }}
                />
            }
            <Icon 
                path={mdiAccountMultiple}
                size={.6}
                color='#fff'
                onClick={() => _scroll(refs[2].current!)}
                style={{
                    cursor: 'pointer'
                }}
            />
            <Icon 
                path={mdiInformation}
                size={.6}
                color='#fff'
                onClick={() => _scroll(refs[3].current!)}
                style={{
                    cursor: 'pointer'
                }}
            />
            <Icon 
                path={mdiApproximatelyEqualBox}
                size={.6}
                color='#fff'
                onClick={() => _scroll(refs[4].current!)}
                style={{
                    cursor: 'pointer'
                }}            
            />
        </Container>
    )
}
