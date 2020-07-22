import { IFilmCard } from "../Film/IFilm.card"

export interface IPlaylist {
    _id: string,
    films: Array<IFilmCard>,
    name: string
}