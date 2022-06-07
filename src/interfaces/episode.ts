export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
}

export interface IEpisodes {
    info: IInfo;
    results: IEpisode[];
}

export interface IInfo {
    pages: number;
}
