import { IFilmCard } from "../film/IFilm.card"

export interface IPlaylist {
    _id: string,
    films: Array<IFilmCard>,
    name: string
}