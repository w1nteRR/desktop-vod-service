export interface IActor {
    actorName: string,
    _id: string,
    films: Array<IActorFilm>
}

interface IActorFilm {
    actorRole: string,
    img: string,
    _id: string
}