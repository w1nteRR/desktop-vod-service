export const useFilter = (data: Array<any>) => {

    const episodes = (episodeNumber: number) => {
        const seasons = Array.from(new Set(data.map(i => i.season)))

        return {
            seasons,
            filtredEpisodes: data.filter(episode => episode.season === episodeNumber)
        }
    }

    return {
        episodes
    }
}