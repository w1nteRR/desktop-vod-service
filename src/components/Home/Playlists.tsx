import React, { FC } from "react"
import { useHistory } from "react-router"

import { Carousel } from '../Carousels/Carousel'

import { BgImgCard } from "../shared/styled/cards/Cards.shared"

import { film_cfg } from '../../utils/configs/carousel'
import { useScrollLoader } from "../../hooks/useScrollLoader"

import { IPlaylist } from '../../interfaces/playlist/IPlaylist'

export const Playlists: FC = () => {

    const playlists: Array<IPlaylist> = useScrollLoader()

    const history = useHistory()

    return <>
        {
            playlists.map(playlist => 
                <div key={playlist._id} style={{ margin: '70px 0' }}>
                <Carousel name={playlist.name} config={film_cfg} rows={1} toShow={3} toScroll={3}>
                    {
                        playlist.films.map(film => 
                            <BgImgCard 
                                key={film._id}
                                onClick={() => history.push(`/film/${film._id}`)} 
                                img={film.img} 
                                m='5px' 
                            />
                        )
                    }
                </Carousel>
                </div>
            )
        }
    </>
} 
    
