import React, { FC } from "react"
import { useHistory } from "react-router"

import { Carousel } from '../Carousels/Carousel'

import { BgImgCard } from "../shared/styled/cards/Cards.shared"

import { film_cfg } from '../../utils/configs/carousel'
import { IPlaylist } from '../../interfaces/playlist/IPlaylist'


interface IPlaylistsProps {
    playlists: Array<IPlaylist>
}

export const Playlists: FC<IPlaylistsProps> = ({ 
    playlists 
}) => {

    const history = useHistory()

    return <>
        {
            playlists.map(playlist => 
                <Carousel key={playlist._id} name={playlist.name} config={film_cfg} rows={1} toShow={3} toScroll={3}>
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
            )
        }
    </>
} 
    
