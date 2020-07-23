import { IEpisode } from "./IEpisode"
import { IActor } from "../cast/IActor"

export interface IFilm {
    _id: string,
    name: string,
    year: number,
    writers: Array<string>,
    wallpaper: string,
    type: string,
    tags: Array<string>,
    subtitles: Array<string>,
    series: Array<IEpisode>,
    release: string,
    genr: Array<string>,
    duration: string,
    director: string,
    describe: string,
    country: string,
    company: string,
    img: string,
    cast: Array<IActor>,
    audio: Array<string>
}
