import React, { FC, useState } from 'react'

import { Carousel } from '../../Carousels/Carousel'

import { BgImgCard } from '../../shared/styled/cards/Cards.shared'
import { DualRing } from '../../shared/styled/loaders/DualRing'

import { Container } from '../../shared/utils/layout'
import { Text } from '../../shared/utils/typography'

import { useAxios } from '../../../hooks/useAxios'

import { IFilmFiltred } from '../../../interfaces/film/IFilm'

import { browse_cfg } from '../../../utils/configs/carousel'
import { text } from '../../shared/utils/colors'

interface IBrowseByProps {
    filtres: Array<string>,
    name: string,
    filterKey: 'genr' | 'company'
}

export const BrowseBy: FC<IBrowseByProps> = ({ filtres, name, filterKey }) => {

    const [activeFilter, setActiveFilter] = useState(filtres[0])

    const { res, loading } = useAxios('/api/search/film/filter', {
        method: 'POST',
        data: {
            data: {
                year: 2019
            }
        }
    })

    if(loading) return (
        <Container h='300px'>
            <DualRing />
        </Container>
    )

    const films: Array<IFilmFiltred> = res?.data.films

    const _renderFiltres = () => 
        <Container justify='flex-start'>
            {
                filtres.map((item: string, index) => 
                    <Text 
                        key={index}
                        uppercase 
                        size='10px'
                        weight='900'
                        m='10px'
                        style={{
                            cursor: 'pointer'
                        }}
                        color={activeFilter === item ? 'silver' : text.silver}
                        onClick={() => setActiveFilter(item)}
                    >
                        {item}
                    </Text>
                )
            }
        </Container>

    const filtred = films.filter(film => film[filterKey].includes(activeFilter))

    return (

        <Carousel 
            config={browse_cfg} 
            toScroll={3} 
            toShow={3} 
            rows={2} 
            name={name}
            before={_renderFiltres()}
            
        >
            {
                filtred.map((film, index) => 
                    <BgImgCard 
                        key={film._id} 
                        img={film.img} 
                        w='97%' 
                        h='140px' 
                        m='7px'
                        // onClick={() => setActiveSlide(index)} 
                    /> 
                )
            }
        </Carousel>
    )
}
