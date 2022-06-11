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
    result: IEpisode[];
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    url: string[];
}
