export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
}

export interface IInfo {
    pages: number;
}

export interface IEpisodes {
    info?: IInfo;
    params?: IEpisodes;
    result: IEpisode[];
}
