import { IEpisode } from "../interfaces/episode";

// Поиск эпизодов через инпут
export const findEpisodes = (value: string, episodes: IEpisode[]) =>
    episodes.reduce((acc, item: IEpisode) => {
        if (item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            return [...acc, item];
        return acc;
    }, []);
